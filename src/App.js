import './components/sass/App.sass';
import Search from './components/Search.js';
import Character from './components/Character.js';

const App = () => {
  return (
    <div className="App">
      <Search />
      <Character />
    </div>
  );
}

export default App;
