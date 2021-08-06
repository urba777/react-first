import { useEffect } from 'react';
import { useState } from 'react';
import workerImage from '../images/resources/worker.png';
import { useRef } from "react";
import coinImage from '../images/resources/Coin.png';
import foodImage from '../images/resources/Bread.png';
import stoneImage from '../images/resources/Stone.png';
import woodImage from '../images/resources/Wood.png';
//style={{ filter: grayScaleFilter() }}

const WorkerAllBuildingsPage = props => {

    const [buttonColor, setButtonColor] = useState('');
    const [buttonBorder, setButtonBorder] = useState('');

    const [woodColor, setWoodColor] = useState('white');
    const [goldColor, setGoldColor] = useState('white');
    const [stoneColor, setStoneColor] = useState('white');
    const [foodColor, setFoodColor] = useState('white');

    //button reference
    const hireButton = useRef(true);

    useEffect(() => {
        if (props.wood >= props.workersTimberNeeded && props.stone >= props.workersStoneNeeded && props.food >= props.workersFoodNeeded && props.gold >= props.workersGoldNeeded) {
            setButtonColor('#768d87');
            setButtonBorder('#566963');
            hireButton.current = true;
        } else {
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            hireButton.current = false;
        }
        if (props.wood >= props.workersTimberNeeded) {
            setWoodColor('white');
        } else if (props.wood < props.workersTimberNeeded) {
            setWoodColor('red');
        }
        if (props.gold >= props.workersGoldNeeded) {
            setGoldColor('white');
        } else if (props.gold < props.workersGoldNeeded) {
            setGoldColor('red');
        }
        if (props.stone >= props.workersStoneNeeded) {
            setStoneColor('white');
        } else if (props.stone < props.workersStoneNeeded) {
            setStoneColor('red');
        }
        if (props.food >= props.workersFoodNeeded) {
            setFoodColor('white');
        } else if (props.food < props.workersFoodNeeded) {
            setFoodColor('red');
        }
    }, [props.wood, props.stone, props.food, props.gold]);

    //when player clicks on HIRE worker button
    const clickToHire = () => {
        if (hireButton.current === true) {
            props.setWorkers(worker => worker + 1);
            props.setWood(wood => wood - props.workersTimberNeeded);
            props.setFood(food => food - props.workersFoodNeeded);
            props.setGold(gold => gold - props.workersGoldNeeded);
            props.setStone(stone => stone - props.workersStoneNeeded);

            //everytime after hiring a worker, needed resources growing
            props.setWorkersFoodNeeded(need => need + 1);
            props.setWorkersGoldNeeded(need => need + 1);
            props.setWorkersStoneNeeded(need => need + 1);
            props.setWorkersTimberNeeded(need => need + 1);
        }
    }

    //grayscale filter
    const grayScaleFilter = () => {
        if (props.workers === 0) {
            return 'grayscale()';
        } else {
            return 'none';
        }
    };

    return (
        <div className="building">
            <div className="buildingTitle"><span>Worker</span></div>
            <img style={{ filter: grayScaleFilter() }} alt='Worker' className='viewBuildingImage' src={workerImage}></img>
            <div>Hire a worker</div>
            <div className="dropDownBuild">
                <button onClick={() => clickToHire()} className="myButton" style={{ backgroundColor: buttonColor, border: buttonBorder }}>HIRE</button>
                <div className="needToBuild">
                    <div className="resourcesNeeded">
                        <img alt='Gold' src={coinImage}></img>
                        <span style={{ color: goldColor }}>{props.workersGoldNeeded}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Food' src={foodImage}></img>
                        <span style={{ color: foodColor }}>{props.workersFoodNeeded}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Stone' src={stoneImage}></img>
                        <span style={{ color: stoneColor }}>{props.workersStoneNeeded}</span>
                    </div>
                    <div className="resourcesNeeded">
                        <img alt='Workers' src={woodImage}></img>
                        <span style={{ color: woodColor }}>{props.workersTimberNeeded}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkerAllBuildingsPage;