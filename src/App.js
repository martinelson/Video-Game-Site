import React from 'react';
import Home from './pages/Home';
import Playing from './pages/Playing';
import Review from './pages/Review';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyles';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalStyles/>
      <Route  exact path={["/game/:id", "/"]} component={Home} />
      <Route exact path={['/playing/:id', '/playing']} component={Playing} />
      <Route exact path='/review' component={Review} />
      <Footer/>
    </div>
  );
}
export default App;
