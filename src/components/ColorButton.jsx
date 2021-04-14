import { Component } from "react";


class ColorButton extends Component {

doClick = color => {
    this.props.actionMethod(color);
}


    render() {
        return (
            <button className="myButton" onClick={() => this.doClick(6)}>{this.props.title}</button>
        )
    }
}

export default ColorButton;