import logo from './logo.svg';
import './css/App.css';
import './css/props.css'
import Header from './Screens/Header';
import Sidebar from './Screens/Sidebar';

function App() {
  return (
    <div className="App flex">
        <Sidebar />
        <Header />
    </div>
  );
}

export default App;
