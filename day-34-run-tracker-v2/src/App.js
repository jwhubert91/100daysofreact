import './App.css';
import Header from './components/Header';
import NewRunForm from './components/NewRunForm';
import RunsList from './components/RunsList';

// firebase.firestore().collection('runs').add({
//   date: Date.now(),
//   time_minutes: 20,
//   distance: 2.2,
// });

function App() {
  return (
    <div className='app-container container'>
      <Header />
      <NewRunForm />
      <RunsList />
    </div>
  );
}

export default App;
