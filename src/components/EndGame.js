import React, { Component } from 'react';


class EndGame extends Component {


    render() {
        if (this.props.status === 'lose') {
            return (<div><h1>You lost</h1></div>)
        }
        else if(this.props.status === 'win'){
            return (<div><h1>You Win</h1></div>)
        }else{
            return <div></div>
        }
    }
}
export default EndGame