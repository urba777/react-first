import EmptyComponent from "../../components/EmptyComponent";

const withEmpty = (checkFunction) => (Component) => ({emptyColor, ...props}) => 
    //ir returniname atsakyma priklausomai ar tuscias masyvas ar ne
    checkFunction(props)  //Tikrina kuris atkeliave is withCompose checkCityListEmpty ar kitas
        ? <EmptyComponent emptyColor={emptyColor}/>
        : <Component {...props} />

export default withEmpty;
 