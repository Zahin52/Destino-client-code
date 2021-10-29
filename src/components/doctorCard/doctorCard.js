import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import Rating from 'react-rating'

export default function Doctorcard({ info}) {
   console.log(info)
   const { name, certificates, rating, docImage } = info
   return (
      <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100 shadow  text-capitalize text-center p-3">
            <div style={{ overflow: 'hidden' }}>
               <img src={docImage} className="card-img-top" alt={name} />
            </div>
            <div className="card-body d-flex flex-column p-0">
               <div className="">
                  <h5
                     className="card-title text-secondary fw-bold p-3"
                     style={{ 'min-height': '3.5rem' }}
                  >
                     {name}
                  </h5>

                  <div className="card-text ">
                     <div className="text-secondary p-3">{certificates}</div>

                     <div className="p-3" style={{ color: 'goldenrod' }}>
                        <Rating
                           emptySymbol="fa fa-star-o fa-2x"
                           fullSymbol="fa fa-star fa-2x"
                           initialRating={rating}
                           readonly={true}
                           fractions={6}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
