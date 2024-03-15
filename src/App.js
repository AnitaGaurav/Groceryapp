import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

  return (
    <div>
        <Home/>
    </div>
  );
}

export default App;
