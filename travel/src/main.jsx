import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css-sheets/home-page.css'; 
import Homepage from './components/home'
import Tripspage from './components/trips'
import 'bootstrap/dist/css/bootstrap.css'
import Japancarousel from './components/japancarousel';
import Koreacarousel from './components/koreacarousel';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='home-div'>
        <h1 className='country-title'>Japan</h1>
        <Japancarousel />
      </div>
      <div className='home-div'>
        <h1 className='country-title'>Korea</h1>
        <Koreacarousel/>
      </div>


    
  </React.StrictMode>,
)
