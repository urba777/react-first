const withEmpty = (checkFunction, EmptyComponent) => (Component) => ({emptyColor, ...props}) => 
    //ir returniname atsakyma priklausomai ar tuscias masyvas ar ne
    checkFunction(props)  //Tikrina kuris atkeliave is withCompose checkCityListEmpty ar kitas
        ? <EmptyComponent emptyColor={emptyColor}/> //Paima emptyColor ir emptyColor daugiau kitur niekur nekeliauja, tik sitam komponentui priskirtas
        : <Component {...props} />

export default withEmpty;
 