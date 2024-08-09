import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsList } from "@/widgets/news";
import { Pagination } from "@/features/pagination";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";
import { IFilters } from "@/shared/interfaces";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      totalPages={TOTAL_PAGES}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      currentPage={filters.page_number}
    >
      <NewsList
        type="item"
        direction="column"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};

export default NewsListWithPagination;
