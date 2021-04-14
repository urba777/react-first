import withZooBoxEmpty from "./withZooBoxEmpty";
import withZooBoxError from "./withZooBoxError";
import { compose } from 'recompose'; //treciuju saliu biblioteka parsisiusta
import ZooBox from "../components/ZooBox";

const withZooBoxCompose = compose(
    withZooBoxError, //pirmoje vietoje
    withZooBoxEmpty
);

export default withZooBoxCompose(ZooBox); //isexportiname funkcijos rezultata su tuo komponentu, kuri norime modifikuoti

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