import * as React from "react";
import * as ReactDOM from "react-dom";

import { CounterComponent } from "./components/Counter";

let myRender: () => void
let counter = 0
const increment = () => {
    counter = counter + 1
    myRender()
}
const decrement = () => {
    counter = counter - 1
    myRender()
}

const Main = () => <div>
    <CounterComponent counter={counter} increment={increment} decrement={decrement}/>
    
</div>

myRender = () => ReactDOM.render(<Main/>, document.getElementById("example"))
myRender()