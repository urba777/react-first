import xicon from '../images/xicon.svg';
import { closeRegLog, openRegLog } from '../scripts/registerLogin';
import vinted from '../images/vinted.svg';
import arrowDown from '../images/arrowDown.svg';
import search from '../images/search.svg';

const Header = () => {

    return (
        <>
            <div className="regLogPopUp" id="regLog">
                <div className="regLogBox">
                    <div className="closeOnRight">
                        <div></div>
                        <div onClick={closeRegLog} className="popUpClose"><img src={xicon}></img></div>
                    </div>
                    <h1>Prisijunk prie Vinted</h1>
                    <p>Parduok nebereikalingas prekes už savo kainą. Pradėk šiandien!</p>
                    <div className="popUpButtons">
                        <a href="#">Registruotis</a>
                        <a href="#">Prisijungti</a>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="headerMain">
                    <img src={vinted}></img>
                    <div className="headerSearch">
                        <form>
                            <button className="searchButton">
                                <span>Prekės</span>
                                <span>
                                    <span className="searchArrow">
                                        <img src={arrowDown}></img>
                                    </span>
                                </span>
                            </button>
                            <div className="searchInputMain">
                                <img src={search}></img>
                                <input className="searchInput" type='text' placeholder="Ieškoti prekių"></input>
                            </div>
                        </form>
                    </div>
                    <div className="rightButtons">
                        <span onClick={openRegLog} className="loginRegister">Registruotis | Prisijungti</span>
                        <span className="sellNow">Parduok dabar</span>
                    </div>
                </div>
                <div className="spaceBetweenHeaders"></div>
                <div className="headerBottom">
                    <a href="#">Moterims</a>
                    <a href="#">Vyrams</a>
                    <a href="#">Vaikams</a>
                    <a href="#">Namams</a>
                    <a href="#">Apie mus</a>
                </div>
            </div>

        </>
    );
}

export default Header;