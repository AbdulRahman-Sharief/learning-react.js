import Header from './Components/Header';
import './index.css';
import Employees from './Pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './Components/Dictionary';
function App() {

  return (
    <div className="App ">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />}>
            </Route>
            <Route path='/dictionary' element={<Dictionary />}>
            </Route>
          </Routes>

        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
