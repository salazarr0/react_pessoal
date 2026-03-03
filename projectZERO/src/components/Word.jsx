import styles from "./Word.module.css"

function Word(){

        return(
                <div className={styles.word_container}>
                    <p className={styles.word_content}> Its a component with a world!</p>
                </div>
        )
}

export default Word;