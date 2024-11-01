import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';  // Import CSS file for global styles

const App = () => {
   const firstName = "Amine"; // Customize your greeting

   return (
       <div className="container mt-5">
           <Card style={{
               width: '22rem',
               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
               borderRadius: '10px',
               overflow: 'hidden'
           }}>
               <Image />
               <Card.Body style={{
                   padding: '1.5rem',
                   textAlign: 'center'
               }}>
                   <Name />
                   <Price />
                   <Description />
               </Card.Body>
           </Card>
           <p className="greeting">
               {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
           </p>
           {firstName && (
               <img src={`${process.env.PUBLIC_URL}/imgproduct.jpg`} alt="Greeting" style={{
                   marginTop: '10px',
                   width: '50px',
                   borderRadius: '50%'
               }} />
           )}
       </div>
   );
};

export default App;
