import React from 'react'
import './coh.css'

const CohProgress = ({attempt, guessList}) => {
    return (
        <div>
            <div className="coh_progress">
                Guess# {attempt}
            </div>
            <ul className='coh_progress_history'>
                {guessList}
            </ul>
        </div>
    )
}

export default CohProgress;