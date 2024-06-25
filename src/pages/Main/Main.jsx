import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {
    const
        [news, setNews] = useState([]),
        [isLoading, setIsLoading] = useState(true),
        [currentPage, setCurrentPage] = useState(1),
        totalPages = 10,
        pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize);
            setNews(response.news);
            setIsLoading(false)
        } catch (e) {
            console.log(e)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage])
    return (
        <main className={styles.main}>
            { news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton type={'banner'} count={1} />}
            <Pagination handleNextPage={handleNextPage}
                        totalPages={totalPages}
                        handlePrevPage={handlePrevPage}
                        handlePageClick={handlePageClick}
                        currentPage={currentPage}
            />

            { !isLoading ? <NewsList news={news}/> : <Skeleton type={'item'} count={10} /> }

            <Pagination handleNextPage={handleNextPage}
                        totalPages={totalPages}
                        handlePrevPage={handlePrevPage}
                        handlePageClick={handlePageClick}
                        currentPage={currentPage}
            />
        </main>
    )
}

export default Main;