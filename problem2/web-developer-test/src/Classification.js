import {useSelector} from "react-redux";
import styles from "./styles/Main.module.scss";
import AnimalItem from "./components/AnimalItem";

const Classification = () => {
  const {animalClassification} = useSelector((state) => state);
  return (
      <>
        <main className={styles.Main}>
          <header>내가 좋아하는 동물</header>
          <section>
              <figure className={styles.likeFigure}>
                  <span>좋아요</span>
                  {
                      animalClassification.map((v) => {
                          if (v.type === true){
                              return <AnimalItem key={v.id} data={v} haveButton={false}></AnimalItem>
                          }
                      })
                  }
              </figure>
              <figure className={styles.unLikeFigure}>
                  <span>싫어요</span>
                  {
                      animalClassification.map((v) => {
                          if (v.type === false){
                              return <AnimalItem key={v.id} data={v} haveButton={false}></AnimalItem>
                          }
                      })
                  }
              </figure>
          </section>
        </main>
      </>
  );
};

export default Classification;
