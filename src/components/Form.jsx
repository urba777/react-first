const Form = props => {
    return (
        <>
            <form onSubmit={props.submitForm} className="box" style={{ borderColor: props.bgcolor }}>

                <input type="number" value={props.textInput} onChange={props.textInputChange}></input>

                <textarea value={props.textArea} className="textArea" onChange={props.textAreaChange}></textarea>

                <select value={props.selectInput} onChange={props.selectInputChange}>
                    <option value='1'>Vienas</option>
                    <option value='2'>Du</option>
                    <option value='3'>Trys</option>
                </select>

                {/* <input type='file'></input> */}

                {/* <button type='submit' className='myButton' onClick={props.submitForm}>Submit</button> */}
                <button type='button' className='myButton' onClick={props.submitForm}>DO STUFF</button>
            </form>
        </>
    );
}

export default Form;