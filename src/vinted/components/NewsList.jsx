import NewsProduct from "./NewsProduct"

const NewsList = ({ productId }) => {

    return (
        <>
            <div className="firstSection">
                <div className="firstSectionWrapper">
                    <div className="firstSectionBoxWrapper">
                        <div className="firstSectionBox">
                            <h1>Atėjo metas atlaisvinti vietos spintoje?</h1>
                            <a className="sellButton" href="#"><button>Parduok</button></a><br></br>
                            <a className="howToButton" href="#">Sužinok, kaip</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="salesList">
                {
                    productId.map((product) => <NewsProduct productId={product.id} key={product.id} />)
                }
            </div>
        </>
    );
}

export default NewsList;