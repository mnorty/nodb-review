import React, {Component} from 'react';
import PokemonTrainer from './../../Pictures/PokemonTrainer.png'
import './Pokemon.css'

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: []
        }
    }
    render(){
        return(
            <div className='pokemon-flex-div'>
                <div className='pokemon-trainer-div'>
                    <img src={PokemonTrainer} alt='Pokemon Trainer' className='pokemon-trainer-image' />
                </div>
                <div className='pokemon'>

                </div>
            </div>
        ) 
    }
}

export default Pokemon;