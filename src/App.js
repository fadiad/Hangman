import './App.css';
import Score from './components/Score';
import Litters from './components/Litters';
import Solution from './components/Solution';
import { Component } from 'react/cjs/react.production.min';
import EndGame from './components/EndGame';

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'CALM',
        hint: 'your ideal mood when coding !'
      },
      score: 100,
      status: 'play',
    }
  }

  selectLetter = (litter) => {


    let copyOfletterStatus = this.state.letterStatus
    let tempScore = this.state.score
    let tempstatus = this.state.status

    copyOfletterStatus[litter] = true

    if (this.state.solution.word.includes(litter)) {
      tempScore = tempScore + 5
    } else {
      tempScore = tempScore - 20
    }

    tempstatus = this.checkstatus(tempScore)



    this.setState({
      letterStatus: copyOfletterStatus,
      score: tempScore,
      status: tempstatus,
    })

  }

  checkstatus = (tempScore) => {
    if (tempScore <= 0) {
      return 'lose'
    }

    for (let l of this.state.solution.word.split('')) {
      if (!this.state.letterStatus[l]) {
        return 'play'
      }
    }
    return 'win'
  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div >
        <Score key={'a'} score={this.state.score} />
        <Solution key={'b'} letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Litters key={'c'} letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        <EndGame status={this.state.status} />
      </div >
    );
  }
}

export default App;





// <div >
// <Score key={'a'} score={this.state.score} />
// <Solution key={'b'} letterStatus={this.state.letterStatus} solution={this.state.solution} />
// <Litters key={'c'} letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
// <EndGame status={this.state.status} />
// </div >