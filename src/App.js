import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Courss from './components/Courss';
import Footer from './components/Footer';
import M1 from './images/m1.png'
import M2 from './images/m2.jpeg'
import M3 from './images/m3.png'
import M4 from './images/m4.png'
import M5 from './images/m5.png'

function App() {
  return (
    <div>
     <Nav/>
     <div className='container'>
     <Courss img={M1}/>
     <Courss img={M2}/>
      <Courss img={M3}/> 
      <Courss img={M4}/> 
      <Courss img={M5}/>
      <Courss img={M1}/>
     <Courss img={M2}/>
      <Courss img={M3}/> 
      <Courss img={M4}/> 
      <Courss img={M5}/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
