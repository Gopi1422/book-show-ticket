import React, { Component } from 'react'

export class ShowItem extends Component {
    render() {
        let {title, description, imageUrl, avgRating, days, time, status, startedOn, showUrl} = this.props;
        return (
        <div className="my-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." height="350px"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <a href={showUrl}  rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Show Details</a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Ratings: </strong>{avgRating}/10</li>
                    <li className="list-group-item"><strong>Status: </strong>{status}</li>
                    <li className="list-group-item"><strong>Schedule: </strong>{days} {time}</li>
                    <li className="list-group-item"><strong>Started On: </strong>{startedOn}</li>
                </ul>
            </div>
        </div>
        )
  }
}

export default ShowItem
