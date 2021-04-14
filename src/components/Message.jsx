import React, { useState } from 'react';

const Message = () => {

    const [message, setMessage] = useState({text: 'Moon', id: 'dingau'}); //objektas
    //const [message, setMessage] = useState('moon'); //paprastai tekstas
    const [count, setCount] = useState(0); //Naudoti su pridejimais pries tai buvusi count (countIsNow)
    const [masyvas, setMasyvas] = useState(['A']);

    // const MsgState = useState('');
    // const message = MsgState[0];
    // const setMessage = MsgState[1];


    return (
        <div className="box">

            <input type="text" value={message.text} onChange={event => {
                //setMessage({text: event.target.value, id: message.id }); //Blogai, nes jei butu daug visko, reiketu rasyti daug is objekto, todel:
                setMessage(stateNow => { 
                    return {...stateNow, text: event.target.value} // //SPREAD: tam kad kiti objekto dalykai nepradingtu
                }); //imame dabartini ir uzrasom nauja value

                //setCount(count + 1); // Ne visiškai teisinga šita eilutė. Ne iškart update'inasi dideliame projekte. Zemiau geras variantas.
                setCount(countIsNow => countIsNow + 1); //Pasiima anksciau buvusia reiksme, prie buvusios reiksmes count pridedame 1. Taip reikia visada 
                //^^^sitas^^^ virsuje yra tik vienas argumentas, todel skliausteliu nereikia f-cijoje
                
                //arba jeigu reikia keliu argumentu, tai zemiau yra:
                //setCount( (countIsNow) => {
                //    const rezultatas = countIsNow + 1
                //    console.log(rezultatas + ' Dabartinis count');
                //    console.log(count + ' Pries tai buves Count');
                //    return rezultatas;
                //})

                setMasyvas(stateNow => {
                    console.log(stateNow);
                    return [...stateNow, 'A']; //pridedame A raidziu i masyva ir atspausdina zemiau .lenght viso masyvo
                });
            }
            }>
            </input>
            <p>Count{count} Mas{masyvas.length}</p>
            <h1>Hello {message.text} {message.id}</h1>
        </div>
    );

}

export default Message;