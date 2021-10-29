import React, { useEffect, useState } from 'react'
import Card from '../Servicecard/Servicecard'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'


export default function Home() {
   const [serviceInfo, setserviceInfo] = useState([])
   const [docInfo, setdocInfo] = useState([])
   const [gallaryInfo, setgallaryInfo] = useState([])
   useEffect(() => {
      fetch('https://immense-journey-76103.herokuapp.com/services')
         .then((res) => res.json())
         .then((data) => setserviceInfo(data))
      fetch('doctorData.json')
         .then((res) => res.json())
         .then((data) => setdocInfo(data))
      fetch('https://immense-journey-76103.herokuapp.com/gallary')
         .then((res) => res.json())
         .then((data) => setgallaryInfo(data))
   }, [])

   return (
      <div>
         <div className="banner ">
            <div className="heading d-flex justify-content-center align-items-center flex-column">
               <h1 className="text-capitalize text-center">
                  Welcome to Destino
               </h1>
               <p className="text-capitalize text-center">Your Travell Guide</p>
            </div>
         </div>
         <SelctionContainer
            sectionTitle="Our Destinations"
            data={serviceInfo}
            cardType="1"
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Our Doctors"
            data={docInfo}
            cardType="2"
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Gallary"
            data={gallaryInfo}
            cardType="3"
         ></SelctionContainer>
      </div>
   )
}
