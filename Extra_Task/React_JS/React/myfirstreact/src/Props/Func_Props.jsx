import React from 'react'

function Func_Props(props) {
  return (

    <div>
      <div className="card" >
        <img className="card-img-top" src={props.img} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.des}.</p>
          <a href="#" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>

  )
}

export default Func_Props
