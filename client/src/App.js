import { Route, Routes } from 'react-router-dom';
import Readdata from './readdata';
import Insert from './insert';
import './App.css';
import Update from './update';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Routes>
          <Route path='/' element={<Readdata/>}/>
          <Route path='/insert' element={<Insert/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
