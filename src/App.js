import ThemeProviderWrapper from './theme/ThemeProviderWrapper';
// import useDarkMode from './hooks/useDarkMode';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  // const { theme, toggleTheme } = useDarkMode();

  return (
    <ThemeProviderWrapper>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer/>
    </ThemeProviderWrapper>
  );
};

export default App;
