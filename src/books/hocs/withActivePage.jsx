import BooksPagerPage from "../components/BooksPagerPage";
import BooksPagerPageActive from "../components/BooksPagerPageActive";

//VIDEO: 2021.04.30 00:50:00 HOCU DARYMAS SU PAGING
//PAGING HOC ACTIVE PAGE 
const withActivePage = (Component) => (props) =>


    props.activePage === props.page
        ?
        <BooksPagerPageActive {...props} />
        :
        <Component {...props} />

export default withActivePage;
