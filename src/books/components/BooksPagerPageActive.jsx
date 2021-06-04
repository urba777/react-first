//SELECTED (ACTIVE) PAGE
//VIDEO: 2021.04.30 00:50:00 HOCU DARYMAS SU PAGING
const BooksPagerPageActive = ({ handlePageSelect, page }) => {
    

    return (
        <span onClick={() => handlePageSelect(page)}>{page}</span>
    )
}

export default BooksPagerPageActive;