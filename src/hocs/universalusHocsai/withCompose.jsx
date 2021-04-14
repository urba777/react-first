import withEmpty from "./withEmpty";
import withError from "./withError";
import { compose } from 'recompose'; //treciuju saliu biblioteka parsisiusta
import CityBox from "../../components/CityBox";
import ZooBox2 from "../../components/ZooBox2";



// const withCompose = compose(
//     withError, //pirmoje vietoje
//     withEmpty
// );

// export default withCompose(ZooBox); //isexportiname funkcijos rezultata su tuo komponentu, kuri norime modifikuoti

export const ZooBoxWithCompose = compose(
    withError, //pirmoje vietoje
    withEmpty
)(ZooBox2);

export const CityBoxWithCompose = compose(
    withError, //pirmoje vietoje
    withEmpty
)(CityBox);



/* 
ZooBox 
    |
    |
    V
withEmpty ---> ZooBox withEmpty
withError ---> ZooBox withError
-------------> ZooBox


Tarkime turime dar viena komponenta
CityBox
    |
    |
    V
withEmpty ---> CityBox withEmpty
withError ---> CityBox withError
-------------> CityBox

*/