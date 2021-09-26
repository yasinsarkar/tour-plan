import React from 'react';
import './Tour.css'

const Tour = (props) => {
   const{Place, img, Country, Cost, Hotel, Day}=props.places
    // console.log(props.places);
    return (
        <div className="col-md-4">
            <div class="card mb-3" style={{"max-width": "540px"}}>
  <div class="row g-0">
    <div>
      <img src={img} style={{"max-height":"300px"}} class="img-fluid rounded-start img-size" alt="..."/>
    </div>
    <div>
      <div class="card-body">
        <h5 class="card-title">Place: {Place}</h5>
        <h5 class="card-title">Country: {Country}</h5>
        <h5 class="card-title">Hotle: {Hotel}</h5>
        <h5 class="card-title">Day: {Day}</h5>
        <p class="card-text">Cost: ${Cost}</p>
        <button 
        onClick={()=> props.handleAddPlace(props.places)}
        class="btn btn-primary"><i class="fas fa-shopping-cart"></i> Choose Now</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Tour;