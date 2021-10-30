import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

import Notfound from './components/notfound/notfound'
import Footer from './components/Footer/Footer'
import Appointment from './components/Appointment/Appointment'

import Register from './components/register/Register'
import Login from './components/login/Login'
import AuthProvider from './context/authProvider'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import MyBookings from './components/Mybookings/Mybookings'
import BookingForm from './components/BookingForm/BookingForm'

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Header />
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <PrivateRoute exact path="/appointment">
                     <Appointment />
                  </PrivateRoute>
                  <PrivateRoute exact path="/services/:id">
                     <BookingForm />
                  </PrivateRoute>
                  <PrivateRoute exact path="/feedback">
                     <MyBookings />
                  </PrivateRoute>
                  <Route exact path="/signup">
                     <Register />
                  </Route>
                  <Route exact path="/login">
                     <Login />
                  </Route>
                  <Route path="*">
                     <Notfound />
                  </Route>
               </Switch>
               <Footer />
            </Router>
         </AuthProvider>
      </div>
   )
}

export default App
