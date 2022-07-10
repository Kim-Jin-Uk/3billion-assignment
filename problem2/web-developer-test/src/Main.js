import styles from './styles/Main.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {CREATE_AN_ANIMAL_CLASSIFICATION, GET_ANIMAL_LIST_REQUEST} from "./reducers";
import Modal from "./components/Modal";
import AnimalItem from "./components/AnimalItem";
import { Link } from 'react-router-dom';


const Main = () => {
    const dispatch = useDispatch()
    const {animalList,getAnimalLoading,getAnimalError} = useSelector((state) => state);
    const [animalItems,setAnimalItems] = useState([])

    const onClickLikeButton = useCallback((index) => {
        animalItems[index].type = true
        setAnimalItems(animalItems.map((v) => {return {...v}}))
    },[animalItems])

    const onClickUnLikeButton = useCallback((index) => {
        animalItems[index].type = false
        setAnimalItems(animalItems.map((v) => {return {...v}}))
    },[animalItems])

    useEffect(() => {
        dispatch({
            type:CREATE_AN_ANIMAL_CLASSIFICATION,
            data:animalItems.map((v) => {return {...v}})
        })
    },[animalItems])

    useEffect(() => {
        dispatch({
            type:GET_ANIMAL_LIST_REQUEST
        })
    },[])

    useEffect(() => {
        setAnimalItems(animalList.map((v) => {
            return {...v,type:null}
        }))
    },[animalList])

    useEffect(() => {
        console.log(animalItems)
    },[animalItems])

    return (
        <>
            <main className={styles.Main}>
                <header>내가 좋아하는 동물</header>
                <section>
                    <main>
                        {
                            animalItems.map((v,i) =>
                                <AnimalItem
                                    data={v}
                                    key={v.id}
                                    onClickLikeButton={() => onClickLikeButton(i)}
                                    onClickUnLikeButton={() => onClickUnLikeButton(i)}
                                    haveButton={true}
                                ></AnimalItem>)
                        }
                    </main>
                    <aside>
                        <article>
                            {
                                animalItems.map((v) =>
                                    <span
                                        key={v.id}
                                        className={v.type ? styles.blueText : v.type === false && styles.redText}
                                    >{v.name}</span>
                                )
                            }
                        </article>
                        <Link to={'/classification'}>
                            <button>좋아하는 동물들 나누기</button>
                        </Link>
                    </aside>
                </section>

            </main>
            <Modal open={getAnimalLoading} header="데이터 로딩중 입니다"></Modal>
            <Modal open={getAnimalError} header="데이터 로딩중 오류가 발생하였습니다. 새로고침 해주세요"></Modal>
        </>

    );
};

export default Main;
