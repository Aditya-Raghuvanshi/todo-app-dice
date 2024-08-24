import { Provider } from 'react-redux';
import './App.css';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App bg-cyan-500">
      <Navbar/>
      <MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
