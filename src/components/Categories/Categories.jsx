import styles from './styles.module.css'

const Categories = ({ categories, setSelectedCaregory, selectedCategory }) => {
    return (
        <div className={styles.categories}>
            <button className={!selectedCategory ? styles.active : styles.item}
                    onClick={() => setSelectedCaregory(null)}
            >
                All
            </button>
            {categories.map(category => {

                return (
                    <button key={category}
                            className={selectedCategory === category ? styles.active : styles.item}
                            onClick={() => setSelectedCaregory(category)}
                    >{
                        category
                    }</button>
                )
            })}
        </div>
    );
}

export default Categories;