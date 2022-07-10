import styles from './Modal.module.scss'

const Modal = (props) => {
    const { open, header } = props;

    return (
        <div className={open ? `${styles.openModal} ${styles.modal}` : styles.modal}>
            {open ? (
                <section>
                    <header>
                        {header}
                    </header>
                </section>
            ) : null}
        </div>
    );
};

export default Modal
