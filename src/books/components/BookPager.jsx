//VIDEO: 2021.04.30 00:50:00 HOCU DARYMAS SU PAGING
import BooksPagerPage from "./BooksPagerPage";

const BookPager = ({ itemsPerPage, allItemsCount, handlePageSelect, activePage }) => {

    const pages = Array(Math.ceil(allItemsCount / itemsPerPage)).fill(null); //Pasidareme masyva is propso-itemsPerPage skaiciaus elementu ir jie visi yra NULL 

    return (
        <div className="pager">
            {
                //nesvarbu kokios reiksmes, svarbu, koks key ***VIDEO 2021.04.28 00:34:56*** 
                // bruksniukas yra kintamasis, kuris yra masyvo reiksme, ir ta reiksme nesvarbi
                pages.map((_, page) => (
                    <BooksPagerPage key={page + 1} handlePageSelect={handlePageSelect} page={page + 1} activePage={activePage} pagesLength={pages.length}/>
                ))
            }
        </div>
    )
}

export default BookPager;