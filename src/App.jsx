import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Collaboration from "./components/Collaboration/Collaboration";
import FooterPart from "./components/FooterPart/FooterPart";

import Grow from "./components/Grow/Grow";
import Help from "./components/Help/Help";

import Marketing from "./components/Marketing/Marketing";
import Name from "./components/NameSection/Name";
import Navbar from "./components/Navbar/Navbar";
import Optimize from "./components/Optimize/Optimize";
import Pepole from "./components/Pepole/Pepole";
import Testimonials from "./components/Testimonials/Testimonials";

export default function App() {
  return (
    <div className="max-w-container mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Name></Name>
        <About></About>
        <Grow></Grow>
        <Optimize></Optimize>
        <Collaboration></Collaboration>
        <Testimonials></Testimonials>
        <Help></Help>
        <Marketing></Marketing>
        <Pepole></Pepole>
        <FooterPart></FooterPart>
        
       
        
      
        
        
        
        
    </div>
   
  )
}