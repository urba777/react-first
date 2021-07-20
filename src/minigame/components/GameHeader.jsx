import coinImage from '../images/resources/Coin.png';
import foodImage from '../images/resources/Bread.png';
import stoneImage from '../images/resources/Stone.png';
import woodImage from '../images/resources/Wood.png';
import workerImage from '../images/resources/worker.png';

const GameHeader = (props) => {

    return (

        <div className="topBoxes">
            <div className="resourcesBox">
                <div className="resource">
                    <img alt='Gold' title='Gold' src={coinImage}></img>
                    <span>{props.gold}</span>
                    <div></div>
                </div>
                <div className="resource">
                    <img alt='Food' title='Food' src={foodImage}></img>
                    <span>{props.food}</span>
                    <div></div>
                </div>
                <div className="resource">
                    <img alt='Stone' title='Stone' src={stoneImage}></img>
                    <span>{props.stone}</span>
                    <div></div>
                </div>
                <div title='Wood' className="resource">
                    <img alt='Wood' src={woodImage}></img>
                    <span>{props.wood}</span>
                    <div></div>
                </div>
                <div title='Workers' className="resource">
                    <img alt='Workers' src={workerImage}></img>
                    <span>{props.workers}</span>
                    <div></div>
                </div>
            </div>
            <div className="xpBar">
                <span className="level">LEVEL: {props.playerLevel}</span>
                <div className="xpProgress">
                    <div className="xpProgressMoving" style={{width: props.xpLevel+'%'}}>{props.xpLevel}</div>
                </div>
            </div>
        </div>


    );
}

export default GameHeader;