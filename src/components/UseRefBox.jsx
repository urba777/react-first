import React, { useEffect, useRef, useState, forwardRef } from 'react';

const UseRefBox = forwardRef((props, inputRef) => { //forwardRef perduoda teviniam elementui

    const [stateCount, setStateCount] = useState(0);

    const refCount = useRef(0);
    //const inputRef = useRef(); //be argumentu

    const clickState = () => {
        const count = stateCount + props.number;
        setStateCount(count);
    }

    const clickRef = () => {
        refCount.current++;
        console.log('useRef update', refCount.current);
        inputRef.current.value = refCount.current;
    }

    const console1 = () => {
        return console.log('Komponentas UseRefBox RERENDER. Input ref: ', inputRef);
    }

    useEffect(() => {
        console.log('Komponentas UseRefBox MOUNTED. Input ref: ', inputRef);
        inputRef.current.focus(); //iskart turime sufokusuota, kur galima rasyti
        inputRef.current.value = "lalalala"; //inputo value iskart nustatys
    }, []);

    return (
        <>
            <div className="box" style={{width: 300, height: 300}}>
            {console1()}
                <small>STATE: {stateCount}</small>
                <small>REF: {refCount.current}</small>
                <button className='myButton' onClick={clickState}>ADD STATE</button>
                <button className='myButton' onClick={clickRef}>ADD REF</button>
                <input type='text' ref={inputRef}></input>
            </div>
        </>
    );

})

export default UseRefBox;