//paprastasis budas
//function withZooBoxError(Component) { //turime funkcija, kuri priima komponenta,
//    return function (props) { //kuri grazina f-cija, kuri gauna visus Component'o propsus
//        return !props.zooList //ir priklausomai nuo zooList'o ji grazina vaizda
//            ? <h6 style={{ color: 'red' }}>ERROR (Nėra masyvo)</h6>
//            : <Component {...props} /> //arba mums grazina ta komponenta, kuri cia gavo su visais propsais
//    }
//}

//maziau aiskesne sitankse 
//tokia pati kaip virsuje, tik kitaip parasyta:
const withZooBoxError = (Component) => (props) => // => - grazina //imame f-cija withZooBoxError, paduodame jai komponenta, returninam iskart kita f-cija, kuriai paduodame propsus
    //ir returniname atsakyma priklausomai nuo ar yra zooList ar jo nera
    !props.zooList
        ? <h6 style={{ color: 'red' }}>ERROR (Nėra masyvo)</h6>
        : <Component {...props} />

export default withZooBoxError;