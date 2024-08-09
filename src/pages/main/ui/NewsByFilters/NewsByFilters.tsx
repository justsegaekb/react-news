import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { NewsFilters } from "@/widgets/news";
import styles from "./styles.module.css";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import { useAppSelector } from "@/app/appStore";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);
  const debouncedKeywords = useDebounce(filters.keywords, 1500);
  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const categories = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters
        categories={categories.data?.categories || []}
        filters={filters}
      />
      <NewsListWithPagination
        filters={filters}
        news={news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default NewsByFilters;
