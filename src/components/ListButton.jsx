const ListButton = props => {

    const action = props.action;
    return(
        <button onClick={() => props.sortMethod(action)} className="myButton">
            {props.name}
        </button>
    );
}

export default ListButton;