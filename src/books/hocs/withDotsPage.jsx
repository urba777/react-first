//TASKIUKAI PAGING

import BooksPagerPageDots from "../components/BooksPagerPageDots";

//VIDEO: 2021.04.30 01:21:00 TASKIUKU PAGING DARYMAS HOC
const withDotsPage = (Component) => (props) => {

    if (props.page !== 1 && props.page === props.activePage + 2 && props.page !== props.pagesLength
        || props.page !== 1 && props.page === props.activePage - 2 ) {
        return <BooksPagerPageDots {...props} />
    }
    else {
        return <Component {...props} />
    }
}

export default withDotsPage;
