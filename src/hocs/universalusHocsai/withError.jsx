//paprastasis budas
//function withZooBoxError(Component) { //turime funkcija, kuri priima komponenta,
//    return function (props) { //kuri grazina f-cija, kuri gauna visus Component'o propsus
//        return !props.zooList //ir priklausomai nuo zooList'o ji grazina vaizda
//            ? <h6 style={{ color: 'red' }}>ERROR (Nėra masyvo)</h6>
//            : <Component {...props} /> //arba mums grazina ta komponenta, kuri cia gavo su visais propsais
//    }
//}

import ErrorComponent from "../../components/ErrorComponent";

//maziau aiskesne sitankse 
//tokia pati kaip virsuje, tik kitaip parasyta:
const withError = (Component) => ({errorColor, ...props}) => //errorColor sunaudojamas sicia i ErrorComponent ir toliau nekeliauja
    //ir returniname atsakyma priklausomai nuo ar yra list ar jo nera                                        |
    !props.list //                                                                                           |
        ? <ErrorComponent color={errorColor}/> //<---------------------------------------------------------------
        : <Component {...props} /> //cia keliauja tik ...props, errorColor nepersiduoda

export default withError;