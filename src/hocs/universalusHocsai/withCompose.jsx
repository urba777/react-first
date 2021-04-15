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


const checkZooListEmpty = (props) => !props.zooList.length;
const checkCityListEmpty = (props) => !props.cityList.length;
const checkZooListError = (props) => !props.zooList;
const checkCityListError = (props) => !props.cityList;
// |                |                  |
// |                |                  |
// V                V                  V
export const ZooBoxWithCompose = compose(
    withError(checkZooListError), //pirmoje vietoje
    withEmpty(checkZooListEmpty)
)(ZooBox2);

export const CityBoxWithCompose = compose(
    withError(checkCityListError), //pirmoje vietoje
    withEmpty(checkCityListEmpty)
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