import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import useAuth from '../../context/useAuth'

export default function Header() {
   const { users, logout } = useAuth()
   console.log(users)
   return (
      <nav
         className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark "
         style={{ opacity: '.7' }}
      >
         <div className="container">
            <NavHashLink
               className="navbar-brand border rounded-pill px-4 py-2"
               to="/"
            >
               Destino
            </NavHashLink>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNavAltMarkup"
               aria-controls="navbarNavAltMarkup"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
               <div className="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                  <NavHashLink
                     className="nav-link active"
                     aria-current="page"
                     to="/"
                  >
                     Home
                  </NavHashLink>
                  <NavHashLink smooth className="nav-link" to="/#services">
                     Services
                  </NavHashLink>
                  {users?.email && (
                     <NavLink className="nav-link" to="/appointment">
                        Appointment
                     </NavLink>
                  )}
                  {users?.email && (
                     <NavLink className="nav-link " to="/feedback">
                        My Bookings
                     </NavLink>
                  )}
                  {users?.email && (
                     <span className="text-white p-2 border rounded-pill">
                        {users.displayName}
                     </span>
                  )}
                  {users?.email ? (
                     <NavLink className="nav-link " to="/">
                        <button onClick={logout} className="btn btn-primary">
                           logout
                        </button>
                     </NavLink>
                  ) : (
                     <NavLink className="nav-link " to="/signup">
                        <button className="btn btn-primary">
                           Register / Login
                        </button>
                     </NavLink>
                  )}
               </div>
            </div>
         </div>
      </nav>
   )
}
