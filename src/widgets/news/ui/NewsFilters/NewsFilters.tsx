import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Categories } from "@/features/category";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { IFilters } from "@/shared/interfaces";
import { CategoriesType } from "@/entities/category";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
