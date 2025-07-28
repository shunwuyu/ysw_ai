import {
    memo,
    useRef
} from 'react';
import {
    ArrowLeft,
    Close
} from '@react-vant/icons'
import styles from './search.module.css'

const SearchBox = (props) => {
    // /api 
    // 单项数据流
    // 子父通信
    const { handleQuery} = props
    // 非受控组件
    const queryRef = useRef(null);
    return (
        <div className={styles.wrapper}>
            <ArrowLeft onClick={() => history.go(-1)}/> 
            <input 
                type="text" 
                className={styles.ipt}
                placeholder='搜索旅游相关'
                ref={queryRef}
                onChange={
                    handleChange
                }
            />
            <Close />
        </div>
    )
}

export default memo(SearchBox)