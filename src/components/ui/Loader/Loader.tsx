import s from './Loader.module.scss'

import { FiLoader } from 'react-icons/fi'

const Loader = () => {

    return (
        <div className={s.loader}>
            <div className={s.loader__holder}>
                <FiLoader className={s.loader__icon} />
            </div>
        </div>
    )
}

export default Loader