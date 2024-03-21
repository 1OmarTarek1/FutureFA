import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Headroom from 'react-headroom';
import { 
  Home, 
  News, 
  Training, 
  Contact, 
  About,
  Profile, 
  Team2009, 
  Team2011, 
  Team2013, 
  Team2015, 
  Team2017, 
  Team2019 
} from './Pages/index'
import { Footer, Navbar, Sidebar, UserAccount } from './Sections';
import { ScrollToTop, ToTopBtn, ReloadEffect, OpenWebEffect } from './Components';
import './App.css';

function App() {  
// add loading and not a Page 
// add (NOT a Page) Page 
// هناك مشكلتين الانتر فالسرش مبيجبش اللينك بظبط
// الناف بار من اول سكرين 385بكسل بتبوظ الشكل
  return (
    <>
    <Router basename='/FutureFA'>
        <div className='MAIN-WRAPPER' style={{ maxWidth:"1680px", marginInline:"auto"}} >
        <OpenWebEffect />
        <ReloadEffect />
        <UserAccount />
        <Sidebar />
        <Navbar /> 
          <Routes>
            <Route path = '/'         element = { < Home     /> } />

              <Route path = '/News'     element = { < News     /> } />
              <Route path = '/Training' element = { < Training /> } />
              <Route path = '/Contact'  element = { < Contact  /> } />
              <Route path = '/Profile'  element = { < Profile  /> } />

              <Route path = '/Else' >
                <Route path = '/Else/Teams' >
                  <Route path = '/Else/Teams/Team2009'  element = { < Team2009  /> } />
                  <Route path = '/Else/Teams/Team2011'  element = { < Team2011  /> } />
                  <Route path = '/Else/Teams/Team2013'  element = { < Team2013  /> } />
                  <Route path = '/Else/Teams/Team2015'  element = { < Team2015  /> } />
                  <Route path = '/Else/Teams/Team2017'  element = { < Team2017  /> } />
                  <Route path = '/Else/Teams/Team2019'  element = { < Team2019  /> } />
                </Route>


                <Route path = '/Else/About'     element = { < About     /> } />
              </Route>
          </Routes>
          <Footer />
        </div>
      <ToTopBtn />
      <ScrollToTop />
    </Router>
    </>
  );
}

export default App;
