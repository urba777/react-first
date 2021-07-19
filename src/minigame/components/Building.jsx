import { useEffect, useState } from "react";
//images ress
import coinImage from '../images/resources/Coin.png';
import foodImage from '../images/resources/Bread.png';
import stoneImage from '../images/resources/Stone.png';
import woodImage from '../images/resources/Wood.png';
import workerImage from '../images/resources/worker.png';
import { BUILD } from "../constants";
import { useRef } from "react";


const Building = props => {

    const [buttonColor, setButtonColor] = useState('');
    const [buttonBorder, setButtonBorder] = useState('');
    const [buttonState, setButtonState] = useState('BUILD');

    const [woodColor, setWoodColor] = useState('white');
    const [goldColor, setGoldColor] = useState('white');
    const [stoneColor, setStoneColor] = useState('white');
    const [foodColor, setFoodColor] = useState('white');

    const buildButton = useRef(true);

    //buttonState
    useEffect(() => {
        if (props.building.level > 0) {
            setButtonState('UPGRADE');
            return buttonState;
        } else if (props.building.level = 0) {
            setButtonState('BUILD');
            return buttonState;
        }
    }, [props.building])

    //settings colors for resources needed
    useEffect(() => {
        if (props.wood >= props.building.woodNeeded[props.building.level] &&
            props.gold >= props.building.goldNeeded[props.building.level] &&
            props.stone >= props.building.stoneNeeded[props.building.level] &&
            props.food >= props.building.foodNeeded[props.building.level]) {
            buildButton.current = true;
            setButtonColor('#768d87');
            setButtonBorder('#566963');
        }
        if (props.wood >= props.building.woodNeeded[props.building.level]) {
            setWoodColor('white');
        } else if (props.wood < props.building.woodNeeded[props.building.level]) {
            setWoodColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
        if (props.gold >= props.building.goldNeeded[props.building.level]) {
            setGoldColor('white');
        } else if (props.gold < props.building.goldNeeded[props.building.level]) {
            setGoldColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
        if (props.stone >= props.building.stoneNeeded[props.building.level]) {
            setStoneColor('white');
        } else if (props.stone < props.building.stoneNeeded[props.building.level]) {
            setStoneColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
        if (props.food >= props.building.foodNeeded[props.building.level]) {
            setFoodColor('white');
        } else if (props.food < props.building.foodNeeded[props.building.level]) {
            setFoodColor('red');
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
    }, [props.gold, props.wood, props.food, props.stone]);

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
        if (props.building.shortName === 'gold') {
            return (
                <>
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
                        <img title='Wood needed' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div title='Workers needed' className="resource">
                        <img src={workerImage}></img>
                        <span>10</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (props.building.shortName === 'stone') {
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
                        <img title='Wood needed' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{currentLevelWoodNeeded()}</span>
                        <div></div>
                    </div>
                    <div className="resource">
                        <img title='Workers needed' src={workerImage}></img>
                        <span>10</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (props.building.shortName === 'food') {
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
                        <img title='Workers needed' src={workerImage}></img>
                        <span>10</span>
                        <div></div>
                    </div>
                </>
            )
        }
        if (props.building.shortName === 'wood') {
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
                        <img title='Workers needed' src={workerImage}></img>
                        <span>10</span>
                        <div></div>
                    </div>
                </>
            )
        }
    };

    const buildButtonClicked = () => {
        if (buildButton.current === true) {
            return props.dispatchBuildings({ type: BUILD, payload: { shortName: props.building.shortName, setGold: props.setGold, setWood: props.setWood, setFood: props.setFood, setStone: props.setStone } });
        }
    }

    ///MAIN RETURN/////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className="buildingPage">
            <div className="buildingTitle inBuildingPageTitle"><span>{props.building.name}</span> <span>LVL {props.building.level}</span></div>
            <div className="buildingPageMargin">
                <div className="buildingPageResources">
                    <h3>Resources needed:</h3>
                    {resourcesNeededByName()}
                </div>
                <div className="buildingPageImg">
                    <img style={{ filter: grayScaleFilter() }} src={props.building.image}></img>
                </div>
                <div className="buildingDescription">
                    <h1>Description:</h1>
                    <div>{props.building.desc1}</div>
                    <div>&nbsp;</div>
                    <div>Produces {props.building.shortName}: {props.building.level}/s</div>
                </div>
            </div>
            <div className="dropDownBuild" style={{ textAlign: 'center', backgroundColor: 'bgColor' }}>
                <button onClick={() => buildButtonClicked()} style={{ backgroundColor: buttonColor, border: buttonBorder }} className="myButton">{buttonState}</button>
            </div>
        </div>
    )
}

export default Building;