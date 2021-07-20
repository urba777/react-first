import { useEffect, useState } from "react";
//images ress
import coinImage from '../images/resources/Coin.png';
import foodImage from '../images/resources/Bread.png';
import stoneImage from '../images/resources/Stone.png';
import woodImage from '../images/resources/Wood.png';
import workerImage from '../images/resources/worker.png';
import { BUILD } from "../constants";
import { useRef } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import allBuildings from "../buildings/allBuildings";


const Building = props => {

    const [buttonColor, setButtonColor] = useState('');
    const [buttonBorder, setButtonBorder] = useState('');
    const [buttonState, setButtonState] = useState('BUILD');

    const [woodColor, setWoodColor] = useState('white');
    const [goldColor, setGoldColor] = useState('white');
    const [stoneColor, setStoneColor] = useState('white');
    const [foodColor, setFoodColor] = useState('white');

    const buildButton = useRef(true);

    //finds building by id with useParams()
    const { id } = useParams();

    // const building = props.allBuildings.find(building => building.id === parseInt(id));

    let building;

    if (id > allBuildings.length) {
        building = props.allBuildings.find(building => building.id === 1);
    } else {
        building = props.allBuildings.find(building => building.id === parseInt(id));
    }

    //buttonState
    useEffect(() => {
        if (building.level > 0) {
            setButtonState('UPGRADE');
            return buttonState;
        } else if (building.level = 0) {
            setButtonState('BUILD');
            return buttonState;
        }
    }, [building])

    //settings colors for resources needed
    useEffect(() => {
        if (building.level === 7) {
            buildButton.current = false;
            setButtonState('MAX');
        }
        if (props.wood >= building.woodNeeded[building.level] &&
            props.gold >= building.goldNeeded[building.level] &&
            props.stone >= building.stoneNeeded[building.level] &&
            props.food >= building.foodNeeded[building.level]) {
            buildButton.current = true;
            setButtonColor('#768d87');
            setButtonBorder('#566963');
        }
        if (props.wood >= building.woodNeeded[building.level]) {
            setWoodColor('white');
        } else if (props.wood < building.woodNeeded[building.level]) {
            setWoodColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
        if (props.gold >= building.goldNeeded[building.level]) {
            setGoldColor('white');
        } else if (props.gold < building.goldNeeded[building.level]) {
            setGoldColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
        if (props.stone >= building.stoneNeeded[building.level]) {
            setStoneColor('white');
        } else if (props.stone < building.stoneNeeded[building.level]) {
            setStoneColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
        if (props.food >= building.foodNeeded[building.level]) {
            setFoodColor('white');
        } else if (props.food < building.foodNeeded[building.level]) {
            setFoodColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
    }, [props.gold, props.wood, props.food, props.stone]);

    //this shows how much gold you need by the level
    const currentLevelGoldNeeded = () => {
        if (building.shortName === 'gold') {
            return building.goldNeeded[building.level];
        }
        if (building.shortName === 'wood') {
            return building.goldNeeded[building.level];
        }
        if (building.shortName === 'stone') {
            return building.goldNeeded[building.level];
        }
        if (building.shortName === 'food') {
            return building.goldNeeded[building.level];
        }
    }
    //this shows how much stone you need by the level
    const currentLevelStoneNeeded = () => {
        if (building.shortName === 'gold' || building.shortName === 'wood' || building.shortName === 'stone' || building.shortName === 'food') {
            return building.stoneNeeded[building.level];
        }
    }
    //this shows how much food you need by the level
    const currentLevelFoodNeeded = () => {
        if (building.shortName === 'gold' || building.shortName === 'wood' || building.shortName === 'stone' || building.shortName === 'food') {
            return building.foodNeeded[building.level];
        }
    }
    //this shows how much wood you need by the level
    const currentLevelWoodNeeded = () => {
        if (building.shortName === 'gold' || building.shortName === 'wood' || building.shortName === 'stone' || building.shortName === 'food') {
            return building.woodNeeded[building.level];
        }
    }
    //this shows how many workers you need by the level to build
    const currentLevelWorkersNeeded = () => {
        if (building.shortName === 'gold' || building.shortName === 'wood' || building.shortName === 'stone' || building.shortName === 'food') {
            return building.workersNeeded[building.level];
        }
    }

    //grayscale filter
    const grayScaleFilter = () => {
        if (building.level === 0) {
            return 'grayscale()';
        } else {
            return 'none';
        }
    };

    //shows needed resources except if it produces same resource
    const resourcesNeededByName = () => {
        if (building.shortName === 'gold' && building.level !== 7) {
            return (
                <>
                    <div className="resource">
                        <img alt='Food needed' title='Food needed' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{currentLevelFoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Stone needed' title='Stone needed' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{currentLevelStoneNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Wood needed' title='Wood needed' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div alt='Workers needed' title='Workers needed' className="resource">
                        <img src={workerImage}></img>
                        <span>{currentLevelWorkersNeeded()}</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (building.shortName === 'stone' && building.level !== 7) {
            return (
                <>
                    <div className="resource">
                        <img alt='Gold needed' title='Gold needed' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{currentLevelGoldNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Food needed' title='Food needed' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{currentLevelFoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Wood needed' title='Wood needed' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Workers needed' title='Workers needed' src={workerImage}></img>
                        <span>{currentLevelWorkersNeeded()}</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (building.shortName === 'food' && building.level !== 7) {
            return (
                <>
                    <div className="resource">
                        <img title='Gold needed' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{currentLevelGoldNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img title='Stone needed' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{currentLevelStoneNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img title='Wood needed' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Workers needed' title='Workers needed' src={workerImage}></img>
                        <span>{currentLevelWorkersNeeded()}</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (building.shortName === 'wood' && building.level !== 7) {
            return (
                <>
                    <div className="resource">
                        <img title='Gold needed' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{currentLevelGoldNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img title='Food needed' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{currentLevelFoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img title='Stone needed' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{currentLevelStoneNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img alt='Workers needed' title='Workers needed' src={workerImage}></img>
                        <span>{currentLevelWorkersNeeded()}</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (building.level === 7) {
            return (
                <>
                    {/* <img alt='Stone needed' title='Stone needed' src={stoneImage}></img> */}
                    <h3 style={{ color: 'green' }}>This building has <br></br> a MAX level!</h3>
                    <div></div>
                </>
            )
        }
    };

    const buildButtonClicked = () => {
        if (buildButton.current === true) {
            return props.dispatchBuildings({ type: BUILD, payload: { shortName: building.shortName, setGold: props.setGold, setWood: props.setWood, setFood: props.setFood, setStone: props.setStone } });
        }
    }

    //GO BACK clicked -> website title changed
    const changePageTitle = () => {
        document.title = 'Main page';
    }

    ///MAIN RETURN/////////////////////////////////////////////////////////////////////////////////////////
    document.title = building.name;
    //if person types by himself wrong id of building
    if (id > allBuildings.length) {
        return (
            <Redirect to='/'></Redirect>
        )
    } else {
        return (
            <>
                <div className="buildingPage">
                    <div className="buildingTitle inBuildingPageTitle"><span>{building.name}</span> <span>LVL {building.level}</span></div>
                    <div className="buildingPageMargin">
                        <div className="buildingPageResources">
                            <h3>Resources needed:</h3>
                            {resourcesNeededByName()}
                        </div>
                        <div className="buildingPageImg">
                            <img style={{ filter: grayScaleFilter() }} src={building.image}></img>
                        </div>
                        <div className="buildingDescription">
                            <h1>Description:</h1>
                            <div>{building.desc1}</div>
                            <div>&nbsp;</div>
                            <div>Produces {building.shortName}: {(2 * building.level)}/s</div>
                        </div>
                    </div>
                    <div className="dropDownBuild" style={{ textAlign: 'center', backgroundColor: 'bgColor' }}>
                        <Link to='/'>
                            <button onClick={changePageTitle} style={{ marginRight: '20px', border: 'none' }} className="myButton">GO BACK</button>
                        </Link>
                        <button onClick={() => buildButtonClicked()} style={{ backgroundColor: buttonColor, border: buttonBorder }} className="myButton">{buttonState}</button>
                    </div>
                </div>
            </>
        )
    }
}


export default Building;