import React from 'react';
import './Tour.css'

const Tour = (props) => {
   const{Place, img, Country, Cost, Hotel, Day}=props.places
    
    return (
        <div className="col-md-4">
            <div className="card mb-3" style={{"maxWidth": "540px"}}>
  <div className="row g-0">
    <div>
      <img src={img} style={{"maxHeight":"300px"}} className="img-fluid rounded-start img-size" alt="..."/>
    </div>
    <div>
      <div className="card-body">
        <h5 className="card-title">Place: {Place}</h5>
        <h5 className="card-title">Country: {Country}</h5>
        <h5 className="card-title">Hotle: {Hotel}</h5>
        <h5 className="card-title">Day: {Day}</h5>
        <p className="card-text">Cost: ${Cost}</p>
        <button 
        onClick={()=> props.handleAddPlace(props.places)}
        className="btn btn-primary"><i className="fas fa-shopping-cart"></i> Choose Now</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tour;