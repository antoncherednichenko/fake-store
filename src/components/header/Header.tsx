import { Container } from "@mui/system"
import Cart from "./Cart/Cart"

import s from './Header.module.scss'

const AppHeader = () => {

    return (
        <header className={s.header}>
            <Container maxWidth="xl">
                <div className={s['flex-container']}>
                    <h1>Fake store</h1>
                    <Cart />
                </div>
            </Container>
        </header>
    )
}

export default AppHeader