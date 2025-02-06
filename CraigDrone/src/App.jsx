import './App.css';
import Navbar from './components/Navbar.jsx';
import 
{
BrowserRouter as Router,
Route,
Routes
}from 'react-router-dom';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';
import Footer from './components/Footer.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx'; 


const App = () => {
    return (
      /*
      <Router>
        <Navbar />
          <div>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/Contact' element={<Contact/>} />
               <Route path='/Portfolio' element={<Portfolio/>} />
               <Route path='/Services' element={<Services/>} />
            </Routes>
         </div>

         <Footer/>

       </Router>
       */
      <UnderConstruction />
    );
}

export default App
