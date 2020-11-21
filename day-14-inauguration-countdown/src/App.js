import Timer from './Timer';

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>React Countdown Clock</h1>
      <p>Changing of the Guard: Countdown to January 20th, 2021</p>
      <Timer />
      <footer>
        Created by <a href='www.linkedin.com/in/jameswhubert'>James Hubert</a>{' '}
        in Brooklyn, NY. Hire him for your next project.
      </footer>
    </div>
  );
}

export default App;
