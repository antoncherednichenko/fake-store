import { Card } from "@mui/material"
import { IGood } from "../../features/goods/goodsSlice"

interface IGoodsListProps {
    goods: IGood[]
}

const GoodsList = ({ goods }: IGoodsListProps) => {

    return (
        <ul>
            { goods.map(g => (
                <li style={{ marginBottom: '15px' }}>
                    <Card>
                        <>
                            <h2>{g.title}</h2>
                            <span>{g.price}</span>
                            <p>{g.description}</p>
                        </>
                    </Card>
                </li>
            )) }
        </ul>
    )
}

export default GoodsList