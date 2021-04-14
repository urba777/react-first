const MirrorForm = props => {
    return(
        <div className='mirrorBox' style={{backgroundColor: 'green', color: props.color}}>
            {(props.sum === '') ? 'No answer' : 'Answer: ' + props.sum}<br></br>
            
            {(props.textInput === '') ? props.textInput2 : props.textInput}<br></br>
            {(props.textArea === '') ? props.textArea2 : props.textArea}<br></br>
            {(props.selectInput === '') ? props.selectInput2 : props.selectInput}
        </div>
    );
}

export default MirrorForm;