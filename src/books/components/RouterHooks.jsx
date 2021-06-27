import { useState, useEffect } from "react";
import { useLocation, useRouteMatch, useHistory } from "react-router";
// VIDEO 2021.05.07 

const RouterHooks = ({ showedItemsCount }) => {

    const { pathname } = useLocation();
    const [pageCount, setPageCount] = useState(0);
    const history = useHistory();

    const match = useRouteMatch('/books-store/:page');
    // console.log((match === null) ? 'NO MATCH' : 'MATCH ', match)

    const maxPage = 8;

    useEffect(() => {
        setPageCount(pageCnt => pageCnt + 1);
    }, [pathname]);



    document.title = (pathname === '/') ? 'Home page' : pathname.slice(1).toUpperCase();

    //jeigu yra objektas (MATCHAS)

    if (match) {
        if (match.params.page > maxPage) {
            history.replace(`/books-store/${maxPage}`);
        } else {
            return (
                <div style={{ textAlign: 'center', marginTop: "20px" }}>
                    <div><h1>BOOKS PAGE {match.params.page}</h1></div>
                    <div>Route: {(pathname === '/') ? 'Home page' : pathname.slice(1)}</div>
                    <div>Page view count: {pageCount}</div>
                </div>
            )
        }
    }

    return (
        <>
            <div style={{ textAlign: 'center', marginTop: "20px" }}>
                <div>Route: {(pathname === '/') ? 'Home page' : pathname.slice(1)}</div>
                <div>Page view count: {pageCount}</div>
            </div>
        </>
    )
}

export default RouterHooks;