import React, { Component } from 'react'
import ShowItem from './ShowItem'

export class Shows extends Component {
    constructor(){
        super();
        console.log("No Constructor..")
        this.state = {
            shows: []
        }
    }

    async componentDidMount(){
        let url = "https://api.tvmaze.com/search/shows?q=all";
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({shows: parsedData})
    }
    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center' style={{margin: "35px 0px", marginTop: "90px"}}>Recommended Shows</h1>
                
                <div className="row">
                {this.state.shows.map((element) => {
                    return <div className="col-md-3 mb-4" key={element.show.id}>
                        <ShowItem show={element.show} title={element.show.name?element.show.name:""} description={element.show.summary?element.show.summary.slice(0, 44):""} imageUrl={element.show.image.medium?element.show.image.medium:"https://static.tvmaze.com/uploads/images/medium_portrait/124/310674.jpg"} showUrl={element.show.url} avgRating={element.show.rating.average} days={element.show.schedule.time !== ""?element.show.schedule.days[0] + " at ": "Coming Soon.."} time={element.show.schedule.time} status={element.show.status} startedOn={new Date(element.show.premiered).toDateString() }/>
                    </div>
                })}
                    
                </div>
            </div>
        )
    }
}

export default Shows
