import React from 'react'
import { NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'

import './card.css'

export default function Servicecard({ info }) {
   console.log(info)
   const { image, title, fee, _id, details } = info
   return (
      <div className="col h-auto p-3 card-parent rounded-3">
         <div className="card h-100   pt-3 px-3 mb-3 ">
            <div className="" style={{ overflow: 'hidden' }}>
               <img src={image} alt="" className="card-img-top" />
            </div>
            <div className="card-body d-flex flex-column">
               <h5 className="card-title">{title}</h5>
               <p
                  className="card-text text-secondary"
                  style={{ 'font-size': '.9rem' }}
               >
                  {details}
               </p>
               <div className=" mt-auto">
                  <NavLink
                     to={`/services/${_id}`}
                     className="btn btn-outline-success btn-sm"
                  >
                     Place Order
                  </NavLink>
                  <a href className="btn btn-outline-danger btn-sm ms-2 ">
                     ${fee}
                  </a>
               </div>
            </div>
         </div>
      </div>
   )

   //    return (
   //       <div className="col h-auto p-3 card-parent rounded-3">
   //          <div className="card h-100 shadow  text-capitalize text-center ">
   //             <div style={{ overflow: 'hidden' }}>
   //                <img src={image} className="card-img-top" alt={title} />
   //             </div>
   //             <div className="card-body d-flex flex-column p-0">
   //                <h5
   //                   className="card-title text-secondary fw-bold p-3"
   //                   style={{ 'min-height': '3.5rem' }}
   //                >
   //                   {title}
   //                </h5>
   //                <small
   //                   className="card-title text-secondary fw-bold p-3"
   //                   style={{ 'min-height': '3.5rem' }}
   //                >
   //                   {details}
   //                </small>

   //                <div className="card-text mt-auto">
   //                   <div className=" text-secondary p-3">
   //                      <span className="fs-3">Fee : $ {fee}</span>
   //                   </div>
   //                </div>

   //                <div className=" p-3 mb-2  mt-auto">
   //                   <NavLink
   //                      to={`/services/${id}`}
   //                      className="btn btn-primary text-capitalize w-100 mt-auto rounded-pill"
   //                   >
   //                      Details
   //                   </NavLink>
   //                </div>
   //             </div>
   //          </div>
   //       </div>
   //    )
}
