import EmptyComponent from "../../components/EmptyComponent";

const withEmpty = (Component) => ({emptyColor, ...props}) => 
    //ir returniname atsakyma priklausomai ar tuscias masyvas ar ne
    !props.list.length
        ? <EmptyComponent emptyColor={emptyColor}/>
        : <Component {...props} />

export default withEmpty;
 