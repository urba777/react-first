import React, { useState, useEffect, useRef } from 'react'; //useRef - HOOK'as, kuris padaro nuoroda i laisvai kintama objekta

const Effect = ({vardas1, vardas2}) => { //fokusas destytojo

    ///CONST'antos///

    const [count, setCount] = useState(0); //Skaiciuos mygtuku paspaudimus. keiciasi nuo mygtuko
    const [date, setDate] = useState(new Date()); //keiciasi nuo tic tac'o
    const [color, setColor] = useState('red');

    ///USE REFERENCE'ai///

    const alreadyMounted = useRef(false); //referenco objektas
    const runOnce = useRef(0); //Viena karta tik padarome objekta. 0 - nera mount ir nera count
    const runColor = useRef(0); 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //atnaujina laikrodzio sekundes
    const ticTac = () => {
        //console.log('TIC-TAC');
        setDate(new Date()); 
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //sitas veikia visada, kai updateinamas komponentas
    useEffect(() => {
        //console.log('VISADA - EFFECT - MOUNT');
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //priristas prie date state'o ir pasileidzia nuo laikrodzio
    //padarome taip, kad pasileistu tik nuo laikroduko. idetas i masyva, ir rendinsis tada, kai pasikeis date
    useEffect(() => {
        //console.log('Laikas pasikeite');

        //keiciam borderio spalva,
        if (runColor.current) { // jeigu runColor 0
            runColor.current = 0;
            setColor('red');
        } else { // jeigu runColor 1
            runColor.current = 1;
            setColor('#ccff00');
        }

    }, [date]);


    //priristas prie count state'o
    //rendinsis tada, kai pasikeis count, kuris idetas i masyva
    useEffect(() => {
        //console.log('Button pressed');
    }, [count]);

    //MIXAS priristas prie count ir date state
    useEffect(() => {
       // console.log('Count arba Laikas pasikeite');
    }, [count, date]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //componentDidMount veikimo imitacija, intervalas sukuriamas
    useEffect(() => {
        //console.log('MOUNTed');
        const timerID = setInterval(() => ticTac(), 1000); //5sec

        //componentWillUnmount veikimo imitacija,
        return () => {
            //console.log('VISADA - EFFECT - UNMOUNT');
            clearInterval(timerID);
        }
    }, []); //Perrendinant komponenta, reikia paduoti tuscia masyva, 
    //antras argumentas - tuscias masyvas, tokiu budu galime imituoti componentDidMount efekta

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //priristas prie count state. Pasileidzia TIK nuo mygtuko
    //100% update, jis nebesuveikia tuo metu, kai paleidziame mount'a
    useEffect(() => {
        if (alreadyMounted.current) { //Patikrina ar useRef true. antras ir toliau kartas
            console.log('Veikia TIK nuo mygtuko');
        } else { //pirmas kartas
            alreadyMounted.current = true;
        }

    }, [count])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //priristas prie count state. Pasileidzia TIK viena karta TIK nuo mygtuko
    useEffect(() => {
        if (runOnce.current === 0) { // mountina
            runOnce.current = 1;
        } else if (runOnce.current === 1) { //Pirmas kartas ir vienintelis
            runOnce.current = 2;
            console.log('***1 RUN only COUNT***');
        }

    }, [count])


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <>
            {/* <div>
                {vardas1} {vardas2}
            </div> */} {/* FOKUSAS virsuje aprasytas ir propsas perduotas */}
            <div className="box" style={{borderColor: color}}>
                <button className="myButton" onClick={() => {
                    setCount(counter => counter + 1);
                }
                }>Press {count}</button>
                <p>Date: {date.toLocaleTimeString()}</p>
            </div>
        </>
    );

}

export default Effect;