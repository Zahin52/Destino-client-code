import React, { useEffect, useState } from 'react'
import Card from '../Servicecard/Servicecard'
import './home.css'
import SelctionContainer from './sectionContainer/selctionContainer'

export default function Home() {
   const [serviceInfo, setserviceInfo] = useState([])
   const [TestimonyInfo, setTestimonyInfo] = useState([])
   const [gallaryInfo, setgallaryInfo] = useState([])
   useEffect(() => {
      fetch('https://immense-journey-76103.herokuapp.com/services')
         .then((res) => res.json())
         .then((data) => setserviceInfo(data))
      fetch('https://immense-journey-76103.herokuapp.com/testimony')
         .then((res) => res.json())
         .then((data) => setTestimonyInfo(data))
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
            sectionTitle="Gallary"
            data={gallaryInfo}
            cardType="3"
         ></SelctionContainer>
         <SelctionContainer
            sectionTitle="Testimony"
            data={TestimonyInfo}
            cardType="2"
         ></SelctionContainer>
      </div>
   )
}
