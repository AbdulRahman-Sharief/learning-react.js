import Header from './Components/Header';
import './index.css';
import Employees from './Pages/Employees';

function App() {

  return (
    <div className="App bg-gray-300 min-h-screen">
      <Header>
        <Employees />
      </Header>
    </div>
  );
}

export default App;
