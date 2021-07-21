import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function ToggleList({ toggleList, setToggleList }) {
    
    return (
        <nav>
            <h1>Wave</h1>
            <button onClick={() => setToggleList(!toggleList)}>
                Song List {" "}
                <FontAwesomeIcon className="musin-icon" icon={faMusic} size="2x" />
            </button>
        </nav>
    )
}

export default ToggleList
