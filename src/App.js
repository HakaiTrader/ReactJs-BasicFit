import {React, useState} from 'react';
import './App.css';
import ModaleMenu from './ModalMenu/ModaleMenu';
import Navbar from './Navbar/Navbar';
import Pubtop from './Pubtop/Pubtop';
import Header from './Header/Header';
/* */
import Home from './Home/Home';
import Avantage from './Avantage/Avantage';
import AboBasicFit from './AboBasicFit/AboBasicFit';
import GoForItBand from './GoForItBand/GoForItBand';
import GoAllIn from './GoAllIn/GoAllIn';
import SimilarArticles from './SimilarArticles/SimilarArticles';
import GoForItFooter from './GoForItFooter/GoForItFooter';
import Information from './Information/Information';
import InformationFooter from './InformationFooter/InformationFooter';

function App() {

  const [toggleOpenMenu, setToggleOpenMenu] = useState(false)
  return (
    <div className="App">
      <Header />
      <Home/>
      <Avantage />
      <AboBasicFit />
      <GoForItBand/>
      <GoAllIn />
      <SimilarArticles />
      <GoForItFooter />
      <Information/>
      <InformationFooter />
    </div>
  );
}

export default App;
