import './App.css';
import firebase from './firebase';

import RunsList from './components/RunsList';
import AddRunForm from './components/AddRunForm';

// test - ignore
// firebase.firestore().collection('runs').add({
//   title: 'Run 1',
//   time_minutes: 20,
//   distance: 2.2,
// });

function App() {
  return (
    <div className='App'>
      <h1>Run Tracker</h1>
      <RunsList />
      <AddRunForm />
    </div>
  );
}

export default App;
