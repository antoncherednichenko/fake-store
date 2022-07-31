import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useAppDispatch } from '../../../../app/hooks'
import { IGood, removeItemFromCart, resetCartList } from '../../../../features/goods/goodsSlice'

interface ICartListProps {
    list: IGood[]
}

const CartList = ({ list }: ICartListProps) => {

    const dispatch = useAppDispatch()

    const removeFromCart = (id: number) => {
        dispatch(removeItemFromCart(id))
    }
    const resetCart = () => {
        dispatch(resetCartList( ))
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>
                        <Button variant="text">buy all</Button>
                    </TableCell>
                    <TableCell>
                        <Button onClick={resetCart} variant="text">remove all</Button>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    list.map(g => (
                        <TableRow key={g.id}>
                            <TableCell>{g.title}</TableCell>
                            <TableCell>{g.category}</TableCell>
                            <TableCell>{g.price}</TableCell>
                            <TableCell>
                                <Button variant="text">Buy</Button>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => removeFromCart(g.id)} variant="text">Remove</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default CartList