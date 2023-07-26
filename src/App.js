import './App.css';
import TypingArea from './components/TypingArea';
import Message from './components/Message';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <Timer/>
      <Message/>
      <TypingArea/>
    </div>
  );
}

export default App;
