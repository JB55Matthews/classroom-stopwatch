import { useState } from 'react';
import './styles/App.css'
import Clock from './Clock';


function App() {

const [mode, setMode] = useState("stopwatch");

    return(
        <>
        <div className="tab-switcher">
            <button className={mode === 'stopwatch' ? 'active' : ''} onClick={() => setMode('stopwatch')}>Stopwatch</button>
            <button className={mode === 'timer' ? 'active' : ''} onClick={() => setMode('timer')}>Timer</button>
        </div>
        <Clock mode={mode}/>
        <div className="butterfly butterfly1" />
        <div className="butterfly butterfly2" />
        <div className="butterfly butterfly3" />
        <div className="butterfly butterfly4" />
        <div className="butterfly butterfly5" />
        <div className="butterfly butterfly6" />
        <div className="butterfly butterfly7" />
        <div className="butterfly butterfly8" />
        </>
    )
    
}

export default App
