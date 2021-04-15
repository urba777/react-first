const withColor = (checkColor) => (Component) => ({ listColor, ...props }) =>
    //ir returniname atsakyma priklausomai ar tuscias masyvas ar ne
    //Tikrina kuris atkeliave is withCompose checkColor ar kitas
    <Component listColor={checkColor(props)} {...props} /> //Paima emptyColor ir emptyColor daugiau kitur niekur nekeliauja, tik sitam komponentui priskirtas
export default withColor;
 