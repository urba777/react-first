//TASKIUKAI PAGING ir TARPAI, kad nerodytu skaiciu

//VIDEO: 2021.04.30 01:21:00 TASKIUKU PAGING DARYMAS HOC
const withEmptyPage = (Component) => (props) => {

    if (props.page === props.activePage + 2 
        || props.page === props.activePage - 2
        || props.page === props.activePage - 1
        || props.page === props.activePage + 1
        || props.page === 1
        || props.page === props.activePage
        || props.page === props.pagesLength
        
        ) {
        return <Component {...props} />
    }
    else {
        return null;
    }
}

export default withEmptyPage;
