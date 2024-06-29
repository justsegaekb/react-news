import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import { useState } from "react";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import {useDebounce} from "../../components/helpers/hooks/useDebounce.js";
import {PAGE_SIZE, TOTAL_PAGES} from "../../components/constants/constants.js";
import {useFetch} from "../../components/helpers/hooks/useFetch.js";
import {useFilters} from "../../components/helpers/hooks/useFilters.js";

const Main = () => {
    // Constants
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })
    const debouncedKeyword = useDebounce(filters.keywords, 1500);

    // Data fetching
    const
        {data, isLoading } = useFetch(getNews, {
        ...filters, keywords: debouncedKeyword,
    }),
        {data: dataCategories} = useFetch(getCategories)

    // Handlers
    const
        handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1)
        }
    },
        handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1)
        }
    },
        handlePageClick = (pageNumber) => {
            changeFilter('page_number', pageNumber)
    }

    return (
        <main className={styles.main}>
            {dataCategories ? <Categories categories={dataCategories.categories}
                         selectedCategory={filters.category}
                         setSelectedCaregory={(category) => changeFilter('category', category)}
            /> : null}
            <Search keywords={filters.keywords}
                    setKeywords={(keywords) => changeFilter('keywords', keywords)}
            />
            <NewsBanner isLoading={isLoading}
                        item={data && data.news && data.news[0]}
            />
            <Pagination handleNextPage={handleNextPage}
                        totalPages={TOTAL_PAGES}
                        handlePrevPage={handlePrevPage}
                        handlePageClick={handlePageClick}
                        currentPage={filters.page_number}
            />
            <NewsList isLoading={isLoading}
                      news={data?.news}
            />
            <Pagination handleNextPage={handleNextPage}
                        totalPages={TOTAL_PAGES}
                        handlePrevPage={handlePrevPage}
                        handlePageClick={handlePageClick}
                        currentPage={filters.page_number}
            />
        </main>
    )
}

export default Main;