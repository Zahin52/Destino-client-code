import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Servicecard/Servicecard'
import useAuth from '../../context/useAuth'
import './services.css'

export default function Services() {
   const { users } = useAuth()
   const [email, setEmail] = useState('')
   const [name, setName] = useState('')
   //    const [email, setEmail] = useState('')
   const [details, setdetails] = useState([])
   useEffect(() => {
      fetch('https://immense-journey-76103.herokuapp.com/services')
         .then((res) => res.json())
         .then((data) => {
            setdetails(data)
            setEmail(users.email)
            setName(users.displayName)
         })
   }, [])
   const { id } = useParams()
//    console.log('id id ', id)
   let detail = details.filter((item) => item._id === id)
   const info = detail[0]
   return (
      <div id="booking" class="section p-4">
         <div class="section-center">
            <div class="container">
               <div class="row">
                  <div class="booking-form">
                     <div class="form-header">
                        <h1>Make your reservation</h1>
                     </div>
                     <form>
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group">
                                 <input
                                    class="form-control w-100"
                                    type="email"
                                    value={email}
                                    placeholder="Enter your Email"
                                 />
                                 <span class="form-label">Email</span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group">
                                 <input
                                    class="form-control w-100"
                                    type="text"
                                    value={name}
                                    placeholder="Enter you Name"
                                 />
                                 <span class="form-label">Name</span>
                              </div>
                           </div>
                        </div>
                        <div class="form-group">
                           <input
                              class="form-control w-100"
                              type="text"
                              value={detail.length && info['title']}
                              placeholder="Country, ZIP, city..."
                           />
                           <span class="form-label">Destination</span>
                        </div>
                        <div class="row">
                           <div class="col-md-6">
                              <div class="form-group">
                                 <input
                                    class="form-control w-100"
                                    type="date"
                                    required
                                 />
                                 <span class="form-label">Check In</span>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="form-group">
                                 <input
                                    class="form-control w-100"
                                    type="date"
                                    required
                                 />
                                 <span class="form-label">Check out</span>
                              </div>
                           </div>
                        </div>

                        <div class="form-btn">
                           <button class="submit-btn">Book Now</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
   
}
