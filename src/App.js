import Header from './Components/Header';
import './index.css';
import Employees from './Pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './Pages/Dictionary';
import Definition from './Pages/Definition';
import NotFound from './Components/NotFound';
import Customers from './Pages/Customers';
import Customer from './Pages/Customer';

function App() {

  return (
    <div className="App ">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/dictionary/:search' element={<Definition />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/customers/:id' element={<Customer />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
