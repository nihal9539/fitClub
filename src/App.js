import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Joins from './components/Joins/Joins';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Joins/>
          <Footer/>
    </div>
  ); 
}

export default App;
