import './styles/Base.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Mobile from './components/Mobile';
import Laptop from './components/Laptop';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Mobile />
      <Laptop />
      <Footer />
    </div>
  );
}

export default App;
