import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './style.css'; // Include your CSS here

const App = () => {
  return (
    <div>
      <Header />
      <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
