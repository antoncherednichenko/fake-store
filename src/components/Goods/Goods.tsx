import { Container } from "@mui/system"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "../../features/goods/goodsSlice"

import Loader from "../ui/Loader/Loader"

import s from './Goods.module.scss'
import GoodsList from "./GoodsList"

const Goods = () => {

    const dispatch = useAppDispatch()
    const { goodsList, isLoading } = useAppSelector(state => state.goods)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <Container maxWidth="xl">
            <div className={s.goods}>
                { isLoading && <Loader /> }
                {
                    !isLoading &&
                    goodsList.length > 0 &&
                    <GoodsList goods={goodsList} />
                }
            </div>
        </Container>
    )
}

export default Goods