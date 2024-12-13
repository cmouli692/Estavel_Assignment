
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import TransparentContainer from './components/TransparentContainer/TransparentContainer';
import SimpleSlider from './pages/DetailsSection/DetailsSection';
import DetailsSection from './pages/DetailsSection/DetailsSection';
import HeroSection from './pages/HeroSection/HeroSection';


import WhyShoppingApp from './pages/WhyShoppingApp/WhyShoppingApp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <WhyShoppingApp/>
      <DetailsSection/>
      
      {/* <TransparentContainer/> */}
      <Footer/>

    </div>
  );
}

export default App;
