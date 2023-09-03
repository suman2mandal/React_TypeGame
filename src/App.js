import './App.css';
import TypingArea from './components/TypingArea';
import Message from './components/Message';
import Result from './components/Result';
import Header from './components/Header';
// import { Router} from 'react-router';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Message/>}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
