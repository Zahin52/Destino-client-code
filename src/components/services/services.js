import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Servicecard/Servicecard'

export default function Services() {
   const [details, setdetails] = useState([])
   useEffect(() => {
      fetch('/serviceData.json')
         .then((res) => res.json())
         .then((data) => setdetails(data))
   }, [])
   console.log(details)
   const { id } = useParams()
   console.log('id id ', id)
   let detail = details.filter((item) => item.id === id)
   const info = detail[0]
//    console.log(detail)
   return (
      <div className="container">
         <div>
            <h1 className="fw-bold text-capitalize mt-5 mb-4 text-center text-white opacity-75 bg-secondary px-4 py-2 rounded-pill border">
               details
            </h1>
         </div>
         <div className=" " style={{ 'min-height': '100vh' }}>
            <div class="card text-center">
               <div class="card-header fs-2">{detail.length && info['title']}</div>
               <div class="card-body">
                  <div>
                     <img src={detail.length && "/"+info['image']} alt="" />
                  </div>
                  <div class="card-text fs-3">
                     {detail.length && info['Fulldetails']}
                  </div>
               </div>
               <div class="card-footer text-muted">Updated : 2 days ago</div>
            </div>
         </div>
      </div>
   )
}
