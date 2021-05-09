import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Pomodoro from './components/Pomodoro';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__pageContainer">
        <div className='app__pageRow'>
          <div className="app__pageColumn">
            <Header />
          </div>
        </div>
        <main className='app__pageRow'>
          <div className='app__pageColumn'>
            <Pomodoro />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
