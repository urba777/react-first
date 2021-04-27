import { useRef, useState } from 'react';
import { MemoPlane } from './Plane';


const MemoBox = () => {

    const [stateCount, setstateCount] = useState(0);
    //const [offTime, setOffTime] = useState('16:15');
    const offTime = useRef('16:15');

    const inputRef = useRef();

    const reRender = () => {
        const count = stateCount + 1;
        setstateCount(count);
        console.log('MemoBox rerender')
    }


    const change = () => {
        const value = inputRef.current.value;
        // setOffTime(value); //jeigu useState
        offTime.current = value; //jeigu useRef
    }

    return (
        <>
            <div className="inlineBox">
                <MemoPlane number='NBB-123' time='11:35' />
                <MemoPlane number='NAS-235' time={offTime.current} />
                <div className='box'>
                    <input style={{ marginTop: '50px' }} ref={inputRef}></input>
                    <button style={{ marginTop: '50px', position: 'relative', top: '-40px' }} onClick={change} className='myButton'>Change</button>
                </div>
            </div>
            <button style={{ position: 'relative', top: '-40px' }} onClick={reRender} className='myButton'>Re render</button>
        </>
    )
}

export default MemoBox;