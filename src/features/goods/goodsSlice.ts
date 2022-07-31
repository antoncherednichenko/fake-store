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
    cartList: IGood[]
    isLoading: boolean
}

const initialState: IInitalState = {
    goodsList: [],
    cartList: [],
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
    reducers: {
        addItemToCart: (state, { payload }) => {
            state.cartList = [...state.cartList, ...state.goodsList.filter(e => e.id === payload)]
        },
        removeItemFromCart: (state, { payload }) => {
            state.cartList = state.cartList.filter(e => e.id !== payload)
        },
        resetCartList: state => { state.cartList = [] }
    },
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

export const { addItemToCart, removeItemFromCart, resetCartList } = goodsSlice.actions

export default goodsSlice.reducer