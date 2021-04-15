// import ErrorComponent from "../../components/ErrorComponent";

const withError = (checkFunction, ErrorComponent) => (Component) => ({errorColor, ...props}) => //errorColor sunaudojamas sicia i ErrorComponent ir toliau nekeliauja
    //ir returniname atsakyma priklausomai nuo ar yra list ar jo nera                                        |
    checkFunction(props) //Tikrina kuris atkeliave is withCompose checkCityListError ar kitas checkZooListError              |
        ? <ErrorComponent fontSize={12} color={errorColor}/> //<------------------------------------------------------------
        : <Component {...props} /> //cia keliauja tik ...props, errorColor nepersiduoda

export default withError;