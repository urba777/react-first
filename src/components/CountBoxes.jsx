import React, { useState, useEffect, useRef } from 'react'; //useRef - HOOK'as, kuris padaro nuoroda i laisvai kintama objekta

const CountBoxes = () => {

//   STATES   /////////////////////////////////////////////////////////////////////////////////////////////
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [started, setStarted] = useState('START');
    const [buttonColor, setButtonColor] = useState('green');
    const [box1Color, setBox1Color] = useState('green');
    const [box2Color, setBox2Color] = useState('green');
    const [box3Color, setBox3Color] = useState('green');
    const [box4Color, setBox4Color] = useState('green');

//   MYGTUKO REFERENCE   /////////////////////////////////////////////////////////////////////////////////////////////
    const buttonPressed = useRef(false);

//   COUNT 1   /////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (count1 === 1) {
            buttonPressed.current = true; //Padarome mygtuko reference true
            const timerID = setInterval(() => count1TicTac(), 50); 
            return () => clearInterval(timerID);  
        }
        if (count1 > 1 && count1 <= 9) {
            const timerID = setInterval(() => count1TicTac(), 50); 
            return () => clearInterval(timerID);  
        }
        // if (count1 === 3) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        // if (count1 === 4) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        // if (count1 === 5) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        // if (count1 === 6) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        // if (count1 === 7) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        // if (count1 === 8) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        // if (count1 === 9) {
        //     const timerID = setInterval(() => count1TicTac(), 50); 
        //     return () => clearInterval(timerID);  
        // }
        if (count1 === 10) {
            count2TicTac();
            setBox1Color('green');
        }
    }, [count1]);
    
//   COUNT 2   /////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (count2 === 1) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 2) {
            const timerID = setInterval(() => count2TicTac(), 100);
            return () => clearInterval(timerID);
        }
        if (count2 === 3) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 4) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 5) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 6) {
            const timerID = setInterval(() => count2TicTac(), 100);
            return () => clearInterval(timerID);
        }
        if (count2 === 7) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 8) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 9) {
            const timerID = setInterval(() => count2TicTac(), 100); 
            return () => clearInterval(timerID);
        }
        if (count2 === 10) {
            count3TicTac();
            setBox2Color('green');
        }
    }, [count2]);

//   COUNT 3   /////////////////////////////////////////////////////////////////////////////////////////////    
    useEffect(() => {
        if (count3 === 1) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 2) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 3) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 4) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 5) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 6) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 7) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 8) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 9) {
            const timerID = setInterval(() => count3TicTac(), 500); 
            return () => clearInterval(timerID);
        }
        if (count3 === 10) {
            count4TicTac();
            setBox3Color('green');
        }
    }, [count3]);

//   COUNT 4   /////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        if (count4 === 1) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 2) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 3) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 4) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 5) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 6) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 7) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 8) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 9) {
            const timerID = setInterval(() => count4TicTac(), 1000); 
            return () => clearInterval(timerID);
        }
        if (count4 === 10) {
            buttonPressed.current = false; //Padarome mygtuko reference false
            setStarted('START');
            setButtonColor('green');
            setBox4Color('green');
        }
    }, [count4]);

//   Kvieciamos funkcijos   /////////////////////////////////////////////////////////////////////////////////////////////
    const count1TicTac = () => {
        setCount1(count => count + 1);
    }

    const count2TicTac = () => {
        setCount2(count => count + 1);
    }

    const count3TicTac = () => {
        setCount3(count => count + 1);
    }

    const count4TicTac = () => {
        setCount4(count => count + 1);
    }

//   STARTAS   /////////////////////////////////////////////////////////////////////////////////////////////
    const startCounting = () => {
        if (buttonPressed.current === false) {
            buttonPressed.current = true;
            if (count4 === 10) {
                setCount1(0); setCount2(0); setCount3(0); setCount4(0);
            }
            count1TicTac();
            setStarted('STARTED');
            setButtonColor('red');
            setBox1Color('red'); setBox2Color('red'); setBox3Color('red'); setBox4Color('red');
        }
    }

    return (
        <>
            <div className="inlineBox">
                <div className="countbox" style={{ borderColor: box1Color }}>
                    <h1>{count1}</h1>
                </div>
                <div className="countbox" style={{ borderColor: box2Color }}>
                    <h1>{count2}</h1>
                </div>
                <div className="countbox" style={{ borderColor: box3Color }}>
                    <h1>{count3}</h1>
                </div>
                <div className="countbox" style={{ borderColor: box4Color }}>
                    <h1>{count4}</h1>
                </div>
            </div>
            <button className='myButton' style={{ marginBottom: 100, backgroundColor: buttonColor }} onClick={startCounting}>{started}</button>
        </>
    );

}

export default CountBoxes;