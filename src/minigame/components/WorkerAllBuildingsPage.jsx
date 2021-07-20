import { useEffect } from 'react';
import { useState } from 'react';
import workerImage from '../images/resources/worker.png';
import { useRef } from "react";
//style={{ filter: grayScaleFilter() }}

const WorkerAllBuildingsPage = props => {

    const [buttonColor, setButtonColor] = useState('');
    const [buttonBorder, setButtonBorder] = useState('');

    const buildButton = useRef(true);

    useEffect(() => {
        if (props.wood >= 10 && props.stone >= 10 && props.food >= 10 && props.gold >= 10) {
            setButtonColor('#768d87');
            setButtonBorder('#566963');
            buildButton.current = true;
        } else {
            setButtonColor('#c0392b');
            setButtonBorder('#c0300b');
            buildButton.current = false;
        }
    }, [props.wood, props.stone, props.food, props.gold]);

    const clickToHire = () => {
        if (buildButton.current === true) {
            props.setWorkers(worker => worker + 1);
            props.setWood(wood => wood - 10);
            props.setFood(food => food - 10);
            props.setGold(gold => gold - 10);
            props.setStone(stone => stone - 10);
        }
    }

    return (
        <div className="building">
            <div className="buildingTitle"><span>Worker</span></div>
            <img alt='Worker' className='viewBuildingImage' src={workerImage}></img>
            <div>Hire a worker</div>
            <div className="dropDownBuild">
                <button onClick={() => clickToHire()} className="myButton" style={{ backgroundColor: buttonColor, border: buttonBorder }}>HIRE</button>
                <div className="needToBuild">
                    RSS
                </div>
            </div>
        </div>
    );
}

export default WorkerAllBuildingsPage;