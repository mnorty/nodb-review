import React from 'react'
import './Pokemon.css'

const PokemonDisplay = (props) => {
  return(
    <div>
        <h4 className='pokemon-name'>{props.pokemon.name}</h4>
        <img src={props.pokemon.image} alt="cool" className='pokemon-pictures'/>
    </div>
  )
}

export default PokemonDisplay;