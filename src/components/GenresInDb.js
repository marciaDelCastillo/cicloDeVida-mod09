import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Genre  from './Genre';



class GenresInDb extends Component {
    constructor(){
        super()
        this.state={
            genresList: [],
            cardBodyClass: "card-body"

        }
    }
    componentDidMount=()=>{
        fetch('http://127.0.0.1:3001/api/genres')
            .then(respuesta =>{
            return respuesta.json()
            })
            .then(genres =>{
            console.log(genres)
            this.setState({genresList: genres.data})
            })
            .catch(error => console.log(error))
    }

    agregarClase = () => {
        this.setState({cardBodyClass:"card-body bg-secondary"});
    }

    quitarClase = () => {
        this.setState({cardBodyClass:"card-body"});
    }

    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={()=>this.agregarClase()} onMouseOut={()=>this.quitarClase()} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className={this.state.cardBodyClass}>
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            return  <Genre  genre={genre}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }
        
    
    

}
export default GenresInDb;