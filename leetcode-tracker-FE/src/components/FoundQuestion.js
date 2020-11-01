import React, { Component } from "react";

class FoundQuestion extends Component { 
    constructor(props) {
        super(props);
        console.log("in found question")
        console.log(this.props.location.state.data)
    }




    render() {
        return (
            <div>Found Question</div>
        )
    }

}

export default FoundQuestion;