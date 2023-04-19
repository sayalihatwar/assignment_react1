import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>
          Benefits of using react
        </h1>

        <ol> 
          <li>Compenent Based Architecture </li>
          <li>Virtual Dom For Efficient Updates</li>
          <li>Rich Ecosystem and community </li>
          <li>Cross platform Develpment</li>
          <li>Strong Community Support</li>
        </ol>
         </div>
        <button> Get started..</button>
        


      </header>
    </div>
  );
}

export default App;
