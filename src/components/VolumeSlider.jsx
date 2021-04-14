import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class VolumeSlider extends Component {
    constructor() {
        super()
        this.state = {
            volumeLeft: 0,
            volumeRight: 0,
        }
    }

    handleOnChangeLeft = (value) => {
        console.log('start', value);
        this.setState({
            volumeLeft: value
        })
    }

    handleOnChangeRight = (value) => {
        this.setState({
            volumeRight: value
        })
    }

    onChangeComplete = (value) => {
        console.log('end', value);
    }

    render() {
        //let { volume } = this.state
        return (
            <>
                <div className="inlineBox">
                    <div className="box slider-box">
                        <span>Left</span>
                        <Slider
                            value={this.state.volumeLeft}
                            orientation="vertical"
                            onChange={this.handleOnChangeLeft}
                            max={11}
                            labels={{1: '1', 3: '3', 5: '5', 7: '7', 9: '9', 11: '11'}}
                            onChangeComplete={this.onChangeComplete}
                        />
                    </div>
                    <div className="box slider-box">
                    <span>Right</span>
                        <Slider
                            value={this.state.volumeRight}
                            orientation="vertical"
                            onChange={this.handleOnChangeRight}
                            max={11}
                            labels={{1: '1', 3: '3', 5: '5', 7: '7', 9: '9', 11: '11'}}
                        />
                    </div>
                </div>
            </>

        )
    }
}

export default VolumeSlider;