import styles from './styles.module.css'

const Categories = ({ categories, setSelectedCaregory, selectedCategory }) => {
    return (
        <div className={styles.categories}>
            {categories.map(category => (
                <button key={category}
                        className={selectedCategory === category ? styles.active : styles.item}
                        onClick={() => setSelectedCaregory(category)}
                >{
                    category
                }</button>
            ))}
        </div>
    );
}

export default Categories;