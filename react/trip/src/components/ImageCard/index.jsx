import styles from './card.module.css'

const ImageCard = (props) => {
    const { url, height } = props
    return (
        <div style={{height}} className={styles.card}>
            <img src={url} className={styles.img} />
        </div>
    )
}

export default ImageCard;