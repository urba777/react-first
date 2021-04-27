const BoxCall = props => {

    return (
        <div className='box'>
            <button style={{ margin: '10px' }} className='myButton' onClick={props.onClick}>Click</button>
        </div>
    );
}

export default BoxCall;