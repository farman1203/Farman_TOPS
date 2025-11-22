import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card m-3 p-3" style={{ width: 200}}>
                <img className="card-img-top" src={props.logo} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.tag}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    )
}

export default Card
