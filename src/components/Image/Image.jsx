import styles from './styles.module.css'

const Image = ({ image }) => {
    return (
        <div className={styles.wrapper}>
            { image ? <img src={image} className={styles.image} alt='news' /> : null}
        </div>
    )
}

export default Image;