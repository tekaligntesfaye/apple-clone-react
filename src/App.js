import './App.css';
import './commonResource/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './commonResource/css/styles.css'
import Header from './commonResource/Header/Header';
import SectionOne from './commonResource/Main/SectionOne/SectionOne';
import SectionTwo from './commonResource/Main/SectionTwo/SectionTwo';
import SectionThree from './commonResource/Main/SectionThree/SectionThree';
import SectionFour from './commonResource/Main/SectionFour/SectionFour';
import SectionFive from './commonResource/Main/SectionFive/SectionFive';
import SectionSix from './commonResource/Main/SectionSix/SectionSix';

import Footer from './commonResource/Footer/Footer';
import Youtube from './commonResource/Main/YouTube/YouTube';
import Me from './commonResource/js/Me';

function App() {
  return (
    <div className="App">
      <Header />,
      <SectionOne />,
      <SectionTwo/>,
      <SectionThree/>,
      <SectionFour/>,
      <SectionFive />,
      <SectionSix />,
      <Youtube />
      {/* <Me /> */}
      <Footer />
      {/* <button type="button" class="btn btn-primary">Primary</button> */}
    </div>
  );
}

export default App;
