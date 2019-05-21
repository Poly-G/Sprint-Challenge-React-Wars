import React from 'react'
import './StarWars.css';

const Character = props => {
  return (
    <div>
      {props.starwarsChars.map((char) => (
        <div className="card">
          <h3>{char.name}</h3>
          <p>
            <strong>Gender:</strong> {char.gender}
          </p>
          <p>
            <strong>Height:</strong> {char.height}
          </p>
          <p>
            <strong>Mass:</strong> {char.mass}
          </p>
        </div>
      ))}
    </div>
  )
}
export default Character
