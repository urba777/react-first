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
                    <img title='Gold' src={coinImage}></img>
                    <span>{props.gold}</span>
                    <div></div>
                </div>
                <div className="resource">
                    <img title='Food' src={foodImage}></img>
                    <span>{props.food}</span>
                    <div></div>
                </div>
                <div class="resource">
                    <img title='Stone' src={stoneImage}></img>
                    <span>{props.stone}</span>
                    <div></div>
                </div>
                <div title='Wood' class="resource">
                    <img src={woodImage}></img>
                    <span>{props.wood}</span>
                    <div></div>
                </div>
                <div title='Workers' class="resource">
                    <img src={workerImage}></img>
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