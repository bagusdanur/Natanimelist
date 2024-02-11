const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1);
        scrollTop();
    }

    const handleLastPage = () => {
        setPage(lastPage);
        scrollTop()
    };
    const handleFirstPage = () => {
        setPage(1);
        scrollTop()
    };



    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
            {page > 1 && (
                <>
                    <button onClick={handleFirstPage} className="transition-all hover:text-color-accent">First</button>
                    <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
                </>
            )}
            <p>{page} of {lastPage}</p>
            {
                page >= lastPage ? null : (
                    <>
                        <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
                        <button onClick={handleLastPage} className="transition-all hover:text-color-accent">Last</button>
                    </>
                )
            }

        </div>
    )
}

export default Pagination