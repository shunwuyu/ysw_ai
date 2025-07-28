import styles from './loading.module.css'
import { memo } from 'react';

const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <div></div>
            <div></div>
        </div>
    )
}

export default memo(Loading)