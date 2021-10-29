import React from 'react'

export default function About() {
   return (
       <div className="my-5 p-4">
           <h1 className="text-secondary">Appointment Form</h1>
         <div className=" px-5 mx-auto ">
            <div className="d-flex justify-content-center align-items-center">
               <form className="w-100 border p-4">
                  <div className="form-row">
                     <div className="form-group col">
                        <label for="inputEmail4">Email</label>
                        <input
                           type="email"
                           className="form-control w-100 border"
                           id="inputEmail4"
                           placeholder="Email"
                        />
                     </div>
                     
                  </div>
                  <div className="form-group">
                     <label for="inputAddress">Address</label>
                     <input
                        type="text"
                        className="form-control w-100 border"
                        id="inputAddress"
                        placeholder="1234 Main St"
                     />
                  </div>
                  <div className="form-group">
                     <label for="inputAddress2">Address 2</label>
                     <input
                        type="text"
                        className="form-control w-100 border"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                     />
                  </div>
                  <div className="form-row">
                     <div className="form-group col">
                        <label for="inputCity">City</label>
                        <input
                           type="text"
                           className="form-control w-100 border"
                           id="inputCity"
                        />
                     </div>
                     <div className="form-group col">
                        <label for="inputState">Time</label>
                        <select id="inputState" className="form-control">
                           <option selected>Choose...</option>
                           <option>10 AM</option>
                           <option>11 AM</option>
                           <option>12 AM</option>
                        </select>
                     </div>
                     <div className="form-group col ">
                        <label for="inputZip">Zip</label>
                        <input
                           type="text"
                           className="form-control border w-100"
                           id="inputZip"
                        />
                     </div>
                  </div>
                  <div className="form-group">
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="checkbox"
                           id="gridCheck"
                        />
                        <label className="form-check-label" for="gridCheck">
                           Check me out
                        </label>
                     </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                     Fix Appointment
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}
