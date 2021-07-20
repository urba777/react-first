import { useEffect, useState } from "react";
//images ress
import coinImage from '../images/resources/Coin.png';
import foodImage from '../images/resources/Bread.png';
import stoneImage from '../images/resources/Stone.png';
import woodImage from '../images/resources/Wood.png';
import workerImage from '../images/resources/worker.png';
import { useRef } from "react";
import { Link } from 'react-router-dom';


const ViewBuilding = props => {

    const [woodColor, setWoodColor] = useState('white');
    const [goldColor, setGoldColor] = useState('white');
    const [stoneColor, setStoneColor] = useState('white');
    const [foodColor, setFoodColor] = useState('white');

    const buildButton = useRef(true);


    //this shows how much gold you need by the level
    const currentLevelGoldNeeded = () => {
        if (props.building.shortName === 'gold') {
            return props.building.goldNeeded[props.building.level];
        }
        if (props.building.shortName === 'wood') {
            return props.building.goldNeeded[props.building.level];
        }
        if (props.building.shortName === 'stone') {
            return props.building.goldNeeded[props.building.level];
        }
        if (props.building.shortName === 'food') {
            return props.building.goldNeeded[props.building.level];
        }
    }
    //this shows how much stone you need by the level
    const currentLevelStoneNeeded = () => {
        if (props.building.shortName === 'gold') {
            return props.building.stoneNeeded[props.building.level];
        }
        if (props.building.shortName === 'wood') {
            return props.building.stoneNeeded[props.building.level];
        }
        if (props.building.shortName === 'stone') {
            return props.building.stoneNeeded[props.building.level];
        }
        if (props.building.shortName === 'food') {
            return props.building.stoneNeeded[props.building.level];
        }
    }
    //this shows how much food you need by the level
    const currentLevelFoodNeeded = () => {
        if (props.building.shortName === 'gold') {
            return props.building.foodNeeded[props.building.level];
        }
        if (props.building.shortName === 'wood') {
            return props.building.foodNeeded[props.building.level];
        }
        if (props.building.shortName === 'stone') {
            return props.building.foodNeeded[props.building.level];
        }
        if (props.building.shortName === 'food') {
            return props.building.foodNeeded[props.building.level];
        }
    }
    //this shows how much wood you need by the level
    const currentLevelWoodNeeded = () => {
        if (props.building.shortName === 'gold') {
            return props.building.woodNeeded[props.building.level];
        }
        if (props.building.shortName === 'wood') {
            return props.building.woodNeeded[props.building.level];
        }
        if (props.building.shortName === 'stone') {
            return props.building.woodNeeded[props.building.level];
        }
        if (props.building.shortName === 'food') {
            return props.building.woodNeeded[props.building.level];
        }
    }
    //this shows how many workers you need by the level to build
    const currentLevelWorkersNeeded = () => {
        if (props.building.shortName === 'gold') {
            return props.building.workersNeeded[props.building.level];
        }
        if (props.building.shortName === 'wood') {
            return props.building.workersNeeded[props.building.level];
        }
        if (props.building.shortName === 'stone') {
            return props.building.workersNeeded[props.building.level];
        }
        if (props.building.shortName === 'food') {
            return props.building.workersNeeded[props.building.level];
        }
    }

    //settings colors for resources needed
    useEffect(() => {
        if (props.wood >= props.building.woodNeeded[props.building.level]) {
            setWoodColor('white');
        } else if (props.wood < props.building.woodNeeded[props.building.level]) {
            setWoodColor('red');
            buildButton.current = false;
        }
        if (props.gold >= props.building.goldNeeded[props.building.level]) {
            setGoldColor('white');
        } else if (props.gold < props.building.goldNeeded[props.building.level]) {
            setGoldColor('red');
            buildButton.current = false;
        }
        if (props.stone >= props.building.stoneNeeded[props.building.level]) {
            setStoneColor('white');
        } else if (props.stone < props.building.stoneNeeded[props.building.level]) {
            setStoneColor('red');
            buildButton.current = false;
        }
        if (props.food >= props.building.foodNeeded[props.building.level]) {
            setFoodColor('white');
        } else if (props.food < props.building.foodNeeded[props.building.level]) {
            setFoodColor('red');
            buildButton.current = false;
        }
    }, [props.gold, props.wood, props.food, props.stone]);

    //grayscale filter
    const grayScaleFilter = () => {
        if (props.building.level === 0) {
            return 'grayscale()';
        } else {
            return 'none';
        }
    };

    //shows needed resources except if it produces same resource
    const resourcesNeededByName = () => {
        if (props.building.shortName === 'gold' && props.building.level !== 7) {
            return (
                <>
                    <div className="resourcesNeeded">
                        <img alt='Food' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{currentLevelFoodNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Stone' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{currentLevelStoneNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Wood' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Workers' src={workerImage}></img>
                        <span style={{ color: 'pink' }}>{currentLevelWorkersNeeded()}</span>
                    </div>
                </>
            )
        }
        if (props.building.shortName === 'stone' && props.building.level !== 7) {
            return (
                <>
                    <div className="resourcesNeeded">
                        <img alt='Gold' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{currentLevelGoldNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Food' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{currentLevelFoodNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Wood' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Workers' src={workerImage}></img>
                        <span style={{ color: 'pink' }}>{currentLevelWorkersNeeded()}</span>
                    </div>
                </>
            )
        }
        if (props.building.shortName === 'food' && props.building.level !== 7) {
            return (
                <>
                    <div className="resourcesNeeded">
                        <img alt='Gold' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{currentLevelGoldNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Stone' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{currentLevelStoneNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Wood' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Workers' src={workerImage}></img>
                        <span style={{ color: 'pink' }}>{currentLevelWorkersNeeded()}</span>
                    </div>
                </>
            )
        }
        if (props.building.shortName === 'wood' && props.building.level !== 7) {
            return (
                <>
                    <div className="resourcesNeeded">
                        <img alt='Gold' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{currentLevelGoldNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Food' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{currentLevelFoodNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Stone' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{currentLevelStoneNeeded()}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Workers' src={workerImage}></img>
                        <span style={{ color: 'pink' }}>{currentLevelWorkersNeeded()}</span>
                    </div>
                </>
            )
        }
        if (props.building.level === 7) {
            return (
                <>
                    <div className="resourcesNeeded">
                        {/* <img alt='Stone needed' title='Stone needed' src={stoneImage}></img> */}
                        <h3 style={{ color: 'green', textAlign: 'center' }}>MAX level!</h3>
                        <div></div>
                    </div>
                </>
            )
        }
    };

    ///MAIN RETURN/////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="building">
            <div className="buildingTitle"><span>{props.building.name}</span> <span>LVL {props.building.level}</span></div>
            <img alt={props.building.name} className='viewBuildingImage' style={{ filter: grayScaleFilter() }} src={props.building.image}></img>
            <div>Produces {props.building.shortName}: {(props.building.level * 2)}/s</div>
            <div className="dropDownBuild">
                <Link to={'/building/' + props.building.id}>
                    <button className="myButton">VIEW</button>
                </Link>
                <div className="needToBuild">
                    {resourcesNeededByName()}
                </div>
            </div>
        </div>
    )
}

export default ViewBuilding;