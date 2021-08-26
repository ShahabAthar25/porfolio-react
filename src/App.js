import './App.css';

import Sidebar from './Component/Sidebar/Sidebar'
import Portfolio from './Component/Portfolio/Portfolio'

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
