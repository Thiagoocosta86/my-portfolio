import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './style.css'; // Include your CSS here

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <About />
      <Skills />
      <Certificates/>
      <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
