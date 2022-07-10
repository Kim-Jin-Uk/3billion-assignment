import styles from './AnimalItem.module.scss'

const AnimalItem = (props) => {
    const {data,onClickLikeButton,onClickUnLikeButton,haveButton} = props;

    return(
        <section className={styles.section}>
            <img
                className={styles.image}
                src={data.img_url}
                alt={data.name}
            ></img>
            {
                haveButton &&
                <footer className={styles.footer}>
                    <button onClick={onClickLikeButton} className={data.type === true && styles.activeLike}>좋아요</button>
                    <button onClick={onClickUnLikeButton} className={data.type === false && styles.activeUnLike}>싫어요</button>
                </footer>
            }
        </section>
    )
}

export default AnimalItem
