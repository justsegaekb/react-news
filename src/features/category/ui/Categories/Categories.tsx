import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";
import { CategoriesType } from "@/entities/category";

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (catgory: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}
const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

Categories.displayName = "Categories";

export default Categories;
