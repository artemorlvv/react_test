import './App.css';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Footprint from './components/footprint/footprint.js';
import How from './components/how/how.js';
import Cases from './components/cases/cases';
import Integration from './components/integration/integration';
import Partners from './components/partners/partners';
import Activities from './components/activities/activities';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footprint />
      <How />
      <Cases />
      <Integration />
      <Partners />
      <Activities />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
