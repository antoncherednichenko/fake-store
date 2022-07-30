import { Container } from "@mui/system"

import s from './Header.module.scss'

const AppHeader = () => {

    return (
        <header className={s.header}>
            <Container maxWidth="xl">
                <h1>Fake store</h1>
            </Container>
        </header>
    )
}

export default AppHeader