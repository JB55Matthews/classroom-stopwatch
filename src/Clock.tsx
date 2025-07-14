import Stopwatch from "./Stopwatch"
import Timer from "./Timer"
import "./styles/Clock.css"

interface MyProps {
    mode: string
  }

function Clock(props: MyProps){

    return(
        <div className="clock">
            <div className="top-button"></div>
            {props.mode === "stopwatch" && <Stopwatch />}
            {props.mode === "timer" && <Timer />}
        </div>

    )

}

export default Clock