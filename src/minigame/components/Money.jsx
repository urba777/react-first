const Money = props => {

    return (
        <div className="cash">
            <span className='money'>{props.money} &euro;</span>
            <span className='title'>PINIGAI</span>
            <span className='alignCenter'>
                
                <span className="plusOneButton">+1</span>
            </span>
        </div>
    )
}

export default Money;