import React,{useState} from "react";
import {Route,Switch} from 'react-router-dom';
import Header from "./components/UI/Header";
import theme from './components/UI/Theme'
import {ThemeProvider} from '@material-ui/styles';
import Footer from "./components/UI/Footer";

import LandingPage from './components/Home/LandingPage';
import Services from "./components/Services/Services";
import CustomSoftware from "./components/Services/CustomSoftware";
import MobileApps from "./components/Services/MobileApps";
import Websites from './components/Services/Websites';


function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Switch>
        <Route path="/" exact > 
          <div><LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/></div>
        </Route>
        <Route path="/services"> 
          <Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        </Route>
        <Route path="/custom-software"> 
          <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </Route>
        <Route path="/mobile-apps"> 
          <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        </Route>
        <Route path="/websites"> 
          <Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </Route>
        <Route path="/revolution"> 
          <div>Revolution</div>
        </Route>
        <Route path="/about"> 
          <div>About</div>
        </Route>
        <Route path="/contact"> 
          <div>Contact</div>
        </Route>
        <Route path="/estimate"> 
          <div>Estimate</div>
        </Route>
      </Switch>
      <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}  />
    </ThemeProvider>
  );
}

export default App;
