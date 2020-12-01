import React, {Component} from 'react';
import Back from "../../back";
import './coh.css'
import CohForm from "./coh_form";
import {genRandomNumber} from "./util";
import CohProgress from "./coh_progress";

export default class CoH extends Component {
    state = {
        genNum: genRandomNumber,
        guess: null,
        allGuesses: [],
        attempt: 0
    }


    updateState(guess) {
        this.setState(prevState => ({
            guess: guess,
            allGuesses: [...prevState.allGuesses, {guess}],
            attempt: prevState.attempt + 1
        }))


    }
    toRestart(){
        window.location.reload()
        this.setState({
            genNum: genRandomNumber,
            guess: null,
            allGuesses: [],
            attempt: 0
        })
    }


    render() {
        const back = '/games';

        const guessList = this.state.allGuesses.map((it, idx) => (
            <li key={idx}>
                <span>{it.guess}</span>
            </li>
        ))

        const raznica = Math.abs(this.state.guess - this.state.genNum)
        console.log(raznica)
        let slovo = '';
        if (raznica >= 50 ){
            slovo = 'очень холодно';
        } else if (raznica >= 20 && raznica < 50 ) {
            slovo = 'холодно'
        } else if (raznica >= 5 && raznica < 20 ) {
            slovo = 'теплее'
        } else if (raznica >= 1 && raznica < 5 ) {
            slovo = 'гаряче'
        } else if (raznica === 0 ) {
            slovo = 'Победа'
        }

        return (
            <div className='coh_container'>
                <Back back={back} />
                <div className="coh_wrapper">
                    <div className="coh_inner">
                        <div className="coh_title"><span className='coh_span_1'>COLD</span> OR <span className='coh_span_2'>HOT</span></div>
                        <div className="slovo">{slovo}</div>
                        <CohForm returnGuess={guess => this.updateState(guess)}/>
                        <CohProgress attempt={this.state.attempt} guessList={guessList}></CohProgress>
                        <div className='res' onClick={this.toRestart.bind(this)}>RESTART</div>
                    </div>
                </div>
            </div>
        )
    }
}