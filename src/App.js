import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Landing />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
