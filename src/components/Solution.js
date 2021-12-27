import React, { Component } from 'react';
import Litter from './Litter';


class Solution extends Component {

    render() {
        return (
            <div>
                {/* <span>{this.props.solution.word.split('').map(r => <Litter litter={r} />)}</span> */}
                {/* <span>{Object.keys(this.props.letterStatus).filter(x => this.props.letterStatus[x] == true ).map(r => <Litter litter={r} />)}</span> */}
                <span>{this.props.solution.word.split('').map(r => {
                    return (this.props.letterStatus[r] ?
                        <Litter key={r} litter={r} /> : <Litter key={r} litter={'-'} />
                    )
                }
                )}</span>
                <br />
                <span>hint : {this.props.solution.hint}</span>
            </div>
        )
    }
}
export default Solution