import './App.css';

import Testimonials from './Testimonial/Testimonials';
import Header from './components/Header/Header';
import Hero from './components/Header/Hero/Hero';
import Join from './components/Join/Join';
import Reasons from './components/Reasons/Reasons';
import Footer from './components/footer/Footer';
import Plan from './components/plans/Plan';
import Programs from './components/programs/Programs';
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Programs></Programs>
      <Reasons></Reasons>
      <Plan></Plan>
      <Testimonials></Testimonials>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
