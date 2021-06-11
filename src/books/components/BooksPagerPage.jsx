import withActivePage from "../hocs/withActivePage";
import withDotsPage from "../hocs/withDotsPage";
import withEmptyPage from "../hocs/withEmptyPage";

//VIDEO: 2021.04.30 00:50:00 HOCU DARYMAS SU PAGING
const BooksPagerPage = ({ handlePageSelect, page, activePage }) => {

    return (
        <span onClick={() => handlePageSelect(page)}><a href='#'>{page}</a></span>
    )
}

export default withDotsPage(withActivePage(withEmptyPage(BooksPagerPage)));
















// SPARGALKE... BE HOCU SELECTED PUSLAPIS PAPRASTAI
/*
let actPg;

    if (activePage === (page + 1)) {
        actPg = <span>{page + 1}</span>;
    } else {
        actPg = <span onClick={() => handlePageSelect(page + 1)}><a>{page + 1}</a></span>;
    }

    return (
        <>{actPg}</>
    )
*/