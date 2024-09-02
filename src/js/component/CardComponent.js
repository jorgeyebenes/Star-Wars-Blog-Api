import React from "react";
import { Link } from "react-router-dom";

export const CardComponent = ({img, title, info, PersonalPage, favourite, heart}) => {
    return (
        <div className="card" style={{ width: '20rem' }}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{info}</p>
          <Link to={PersonalPage} className="btn btn-dark me-3">+ Info</Link>
          <button onClick={favourite} className="btn btn-warning">{heart}</button>
        </div>
      </div>
    )
}