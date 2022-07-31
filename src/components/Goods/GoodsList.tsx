import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addItemToCart, IGood, removeItemFromCart } from "../../features/goods/goodsSlice"
import { getRandomValue } from "../../helpers"

import s from './GoodsList.module.scss'

interface IGoodsListProps {
    goods: IGood[]
}

const GoodsList = ({ goods }: IGoodsListProps) => {

    const dispatch = useAppDispatch()
    const { cartList } = useAppSelector(state => state.goods)

    const cartHandler = (id: number) => {
        if(checkItemInCart(id)) {
            dispatch(removeItemFromCart(id))
        } else {
            dispatch(addItemToCart(id))
        }
    }
    const checkItemInCart = (id: number): boolean => {
        return cartList.some(e => e.id === id)
    }

    return (
        <div className={s['list-holder']}>
            <ul className={s.list}>
                { goods.map(g => (
                    <li key={g.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                image={g.image} 
                            />
                            <CardContent>
                                <Typography variant="h5">{g.title}</Typography>
                                <Rating value={getRandomValue(1, 5)}/>
                                <hr />
                                <Typography variant="body2">{g.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained">Buy now</Button>
                                <Button onClick={() => cartHandler(g.id)} variant="outlined">
                                    {checkItemInCart(g.id) ? 'Remove from cart' : 'Add to cart'}
                                </Button>
                            </CardActions>
                        </Card>
                    </li>
                )) }
            </ul>
        </div>
    )
}

export default GoodsList