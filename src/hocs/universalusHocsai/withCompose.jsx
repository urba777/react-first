import withEmpty from "./withEmpty";
import withError from "./withError";
import withColor from './withColor';
import { compose } from 'recompose'; //treciuju saliu biblioteka parsisiusta
import CityBox from "../../components/CityBox";
import ZooBox2 from "../../components/ZooBox2";
import ErrorComponent from "../../components/ErrorComponent";
import ErrorCityComponent from "../../components/ErrorCityComponent";
import EmptyComponent from "../../components/EmptyComponent";

// const withCompose = compose(
//     withError, //pirmoje vietoje
//     withEmpty
// );

// export default withCompose(ZooBox); //isexportiname funkcijos rezultata su tuo komponentu, kuri norime modifikuoti


///////////////////////////////////////////////////////// SITO f-CIJOS READ ONLY /////////////////////
///////////////////////////////////// NESKIRTA STATE'ams ////////////////////////////////////////////

//JEIGU MASYVE DAUGIAU NEIGU 2 ĮRAŠAI, PAKEIS SPALVA PER PROPSUS
const checkColor = (props) => {
    if (props.cityList && props.cityList.length > 2) {
        return 'green';
    }
    if (props.zooList && props.zooList.length >2) {
        return 'red';
    }
    return 'white';
}
// |                |                  |
const checkZooListEmpty = (props) => !props.zooList.length;
const checkCityListEmpty = (props) => !props.cityList.length;
const checkZooListError = (props) => !props.zooList;
const checkCityListError = (props) => !props.cityList;
// |                |                  |
// |                |                  |
// V                V                  V
export const ZooBoxWithCompose = compose(
    withError(checkZooListError, ErrorComponent), //pirmoje vietoje praeina -- ErrorComponent - perduodame komponenta kaip propsa kuri cia suimportavome
    withEmpty(checkZooListEmpty, EmptyComponent), //jeigu praejo error, eina cia
    withColor(checkColor) //jeigu praejo Empty, eina cia
)(ZooBox2); //jei viskas ok, ateina iki pacio komponento

export const CityBoxWithCompose = compose(
    withError(checkCityListError, ErrorCityComponent), //pirmoje vietoje praeina -- paduodame konkreciai ErrorCity komponenta kaip propsa i errora
    withEmpty(checkCityListEmpty, EmptyComponent), //jeigu praejo error, eina cia
    withColor(checkColor) //jeigu praejo Empty, eina cia
)(CityBox); //jei viskas ok, ateina iki pacio komponento



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