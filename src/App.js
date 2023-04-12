import Header from './Components/Header';
import './index.css';
import Employees from './Pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './Pages/Dictionary';
import Definition from './Pages/Definition';

function App() {

  return (
    <div className="App ">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/definition' element={<Definition />} />
          </Routes>

        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
