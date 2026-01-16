
import Progress from "./components/Progress/Progress";
import Eco from "./components/Eco/Eco";
import ConnectorApp from "./components/Connect/ConnectorApp";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/Hero/Header";
import BrandSection from "./components/Hero/brand";
import Features from "./components/Hero/features";
import on from '../src/assets/so.jpg'
import IssuesSection from "./components/Hero/issues";
import DownloadSection from "./components/Hero/download";
import DocumentSection from "./components/Hero/doc";

const App = () => {
  return (
    <>
    <Header/>
   <Hero/>
   <BrandSection/>
   <Features/>
   <img src={on} alt="" />
   <IssuesSection/>
   <DownloadSection/>
   <DocumentSection/>
   <Footer/>

   


 
      

    </>
  );
};

export default App;
