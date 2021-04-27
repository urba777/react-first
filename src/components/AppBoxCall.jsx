import { useCallback, useEffect, useRef, useState } from "react";
import BoxCall from "./BoxCall";

const AppBoxCall = props => {

    // function derSumator() {
    //     return (a,b) => a + b;
    // }

    // const der1 = derSumator();
    // const der2 = derSumator();

    // console.log(der1(2,6));
    // console.log(der2(2,6));

    // console.log(der1 === der2); //bus false
    // console.log(der2 === der2); //bus true
    //susikuria papildomu kintamuju, todel reikia OPTIMIZUOTI KODA
    //jeigu daug kartu iskvieciamos f-cijos (pastoviai kuriama is naujo arba sudetingai komplikuota)
    //mes galime memorizinti f-cijas jeigu nesikeicia ju argumentai. REACTAS GALI atsiminti ta f-cija ir nekurti papildomu kopiju

    const [stateCount, setstateCount] = useState(0);

    useEffect(() => {
    }, []);

    const reRender = () => {
        const count = stateCount + 1;
        setstateCount(count);
        console.log('BoxCall rerender')
    }

    //be useCallBack sita funkcija su kiekvienu persirendinimu sukuriama is naujo
    const doClick = useCallback(() => { //pirmas parametras yra f-cija, kuria norime prisiminti
        console.log('BoxCall - mygtukas paspaustas');
    }, []) //antras parametras yra fcijos argumentai, ji susiraso i masyva (sikart bus tuscia)
    //jeigu antras parametras keiciasi (pvz state keiciasi), tada nebus atminties ir kursis nauja f-cija, o jeigu nesikeicia - atsimins

    //tikriname, ar ta pati f-cija, ar susikure nauja kopija
    const doclck = useRef(doClick);
    console.log(doclck.current === doClick, 'is the same');

    return (
        <div>
            <BoxCall boxStyle={props.boxStyle} onClick={doClick} />

            <button style={{position: 'relative', top: '-40px' }} onClick={reRender} className='myButton'>Re render</button>
        </div>
    );
}

export default AppBoxCall;