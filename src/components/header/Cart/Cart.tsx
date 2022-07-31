import s from './Cart.module.scss'
import { BsCart } from 'react-icons/bs'
import { useAppSelector } from '../../../app/hooks'
import { useState } from 'react'
import { Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CartList from './CartList/CartList'


const boxStyle = {
    width: '100%',
    maxWidth: '750px',
    maxHeight: '600px',
    height: '100vh',
    background: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '50',
    borderRadius: '10px',
    padding: '20px',
    overflowY: 'auto'
}


const Cart = () => {

    const { cartList } = useAppSelector(state => state.goods)
    const [isModal, setIsModal] = useState(false)

    const openModal = () => { setIsModal(true) }
    const closeModal = () => { setIsModal(false) }

    return (
        <div className={s.cart}>
            <button onClick={openModal} className={s.cart__icon}>
                <BsCart />
                {
                    cartList.length > 0 &&
                    <span className={s.cart__count}>{cartList.length}</span>
                }
            </button>
            <Modal
                open={isModal}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    {
                        cartList.length > 0 &&
                        <CartList list={cartList} />
                    }
                    {
                        cartList.length === 0 && 
                        <Typography variant='h4'>
                            Cart is empty
                        </Typography>
                    }   
                </Box>
            </Modal>
        </div>
    )
}

export default Cart