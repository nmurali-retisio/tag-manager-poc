import logo from './logo.svg';
import './App.css';
import CorsTest from './CorsTest';

function App() {

  return (
    <div className="App">
      <button onClick={e => {
        window.rtag('event', {
          'method': 'productClickEvent',
          'value': '114'
      })
      }}>View product</button>
    </div>
  );
}

export default App;
