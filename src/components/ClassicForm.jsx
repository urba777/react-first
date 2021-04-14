import { Component } from 'react';
import { normalStyle } from '../shared/styles';

import MirrorForm from './MirrorForm';
import Form from './Form';


class ClassicForm extends Component {

    constructor() {
        super();
        this.state = {
            color: 'white',
            bgcolor: 'white',
            textInput: '',
            textArea: '',
            selectInput: '',
            sum: '',
            textInput2: '',
            textArea2: '',
            selectInput2: '',
        }
    }

    // doClick3 = (color) => { // <--- keičia steitą
    //     this.setState({color: color});
    // }

    textInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ textInput: event.target.value });
    }

    textAreaChange = (event) => {
        console.log(event.target.value);
        this.setState({ textArea: event.target.value });
    }

    selectInputChange = (event) => {
        console.log(event.target.value);
        this.setState({ selectInput: event.target.value });
    }

    submitForm = (event) => {
       // event.preventDefault(); //Submit mygtuka paspaudus neperkraus puslapio
        console.log('submited');
        let x = parseInt(this.state.textInput);
        let y = parseInt(this.state.textArea);
        let z = parseInt(this.state.selectInput);
        let suma = x + y + z;
        this.setState({sum: suma });
        this.setState({selectInput2: this.state.selectInput, textArea2: this.state.textArea, textInput2: this.state.textInput})
        this.setState({selectInput: '', textArea: '', textInput: '', color: 'red'})
    }

    changeTextColor = (color) => {
        console.log('works');
    }

    render() {
        console.log('RENDER <--- ClasicBox')
        return (
            <>
                <div className="inlineBox">
                    <MirrorForm
                        textInput={this.state.textInput}
                        textArea={this.state.textArea}
                        selectInput={this.state.selectInput}
                        textInput2={this.state.textInput2}
                        textArea2={this.state.textArea2}
                        selectInput2={this.state.selectInput2}
                        sum={this.state.sum}
                        color={this.state.color}
                        textColor={this.textColor}
                    />
                    <Form
                        textInput={this.state.textInput}
                        textArea={this.state.textArea}
                        selectInput={this.state.selectInput}
                        sum={this.state.sum}
                        textInputChange={this.textInputChange}
                        textAreaChange={this.textAreaChange}
                        selectInputChange={this.selectInputChange}
                        submitForm={this.submitForm}
                        bgcolor={this.state.bgcolor}
                        changeTextColor={this.changeTextColor}
                    />
                </div>
            </>
        )
    }
}

export default ClassicForm;