import React from 'react'
import './coh.css'

const CohForm = ({ returnGuess }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value;

        returnGuess(guess)

    }

    return (
        <div>
            <form className='coh_form' onSubmit={onSubmit}>
                <input type='number' name='guess' placeholder='Угадай цифру...' required/>
                <button type='submit'>GUESS</button>
            </form>
        </div>
    )
}

export default CohForm;