import React, {Component} from 'react';
import PokeCard from './PokeCard';
import {Link, Outlet} from 'react-router-dom';

// or React.Component .this is without import {Component}
class PokeList extends Component {
    state = {
        data:[],
        isLoading: false,

    };

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
        .then((res) => res.json())
        .then((data) => {
            const fetches = data.results.map((p) => {
                return fetch(p.url).then(res => res.json());
            });

            Promise.all(fetches).then((res) => {
                console.log(res);
                this.setState({ data: res, isLoading: false });
            });
        });
    }

    render () {
        if(this.state.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <div>
                {this.state.data.map((p)=> (
                    <PokeCard 
                        key={p.name} 
                        image={p.sprites.other.dream_world["front_default"]} 
                        name={p.name} />

                ))};
                
            </div>
        );
    }
}
 
export default PokeList;