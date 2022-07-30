import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export interface IGood {
    id: number
    title: string
    price: number
    category: string
    description: string
    image: string
}

interface IInitalState {
    goodsList: IGood[]
    isLoading: boolean
}

const initialState: IInitalState = {
    goodsList: [],
    isLoading: false
}

export const getAllProducts = createAsyncThunk(
    'goods/getAllProducts',
    async () => {
        const resp = await axios({ method: 'get', url: 'https://fakestoreapi.com/products' })
            .then(data => {
                if(data.status === 200 && data.data?.length) {
                    return data.data
                } else {
                    return []
                }
            })
        return resp
    }
)

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllProducts.pending, state => { state.isLoading = true })
            .addCase(getAllProducts.fulfilled, (state, { payload }) => {
                state.goodsList = payload
                state.isLoading = false
            })
            .addCase(getAllProducts.rejected, state => { state.isLoading = false })

    }
})

export default goodsSlice.reducer