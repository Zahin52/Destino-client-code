import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import useAuth from '../../context/useAuth'
import './BookingForm.css'
import axios from 'axios'

export default function BookingForm() {
   const { users } = useAuth()
   const [email, setEmail] = useState('')
   const [name, setName] = useState('')
   const journyStart = useRef('')
   const journyEnd = useRef('')
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
   const confirmBooking = (e) => {
      const bookingInfo = {
         email,
         name,
         destination: info['title'],
         JourneyDate: journyStart.current.value,
         ReturnDate: journyEnd.current.value,
         status: 'pending',
      }
       console.log(bookingInfo)
       axios
          .post('https://immense-journey-76103.herokuapp.com/bookings', bookingInfo)
          .then((response) => {
              console.log(response)
              if (response.status === 200) {
                  alert("success")
              }
              else {
                  alert("false")
              }
          })
          .catch((error)=> {
             console.log(error)
          })
      e.preventDefault()
   }
   const { id } = useParams()
   //    console.log('id id ', id)
   let detail = details.filter((item) => item._id === id)
   const info = detail[0]
   return (
      <div id="booking" className="section p-4">
         <div className="section-center">
            <div className="container">
               <div className="row">
                  <div className="booking-form">
                     <div className="form-header">
                        <h1>Make your reservation</h1>
                     </div>
                     <form>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    className="form-control w-100"
                                    type="email"
                                    value={email}
                                    placeholder="Enter your Email"
                                 />
                                 <span className="form-label">Email</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    className="form-control w-100"
                                    type="text"
                                    value={name}
                                    placeholder="Enter you Name"
                                 />
                                 <span className="form-label">Name</span>
                              </div>
                           </div>
                        </div>
                        <div className="form-group">
                           <input
                              className="form-control w-100"
                              type="text"
                              value={detail.length && info['title']}
                              placeholder="Country, ZIP, city..."
                           />
                           <span className="form-label">Destination</span>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    ref={journyStart}
                                    className="form-control w-100"
                                    type="date"
                                    required
                                 />
                                 <span className="form-label">Check In</span>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="form-group">
                                 <input
                                    ref={journyEnd}
                                    className="form-control w-100"
                                    type="date"
                                    required
                                 />
                                 <span className="form-label">Check out</span>
                              </div>
                           </div>
                        </div>

                        <div className="form-btn">
                           <button
                              onClick={(e) => confirmBooking(e)}
                              className="submit-btn"
                           >
                              Book Now
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
