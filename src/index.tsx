import * as React from "react";
import * as ReactDOM from "react-dom";

import { CounterComponent } from "./components/Counter";

let myRender: () => void

const makeIncrement = (index:number) => {
    return () => {
        counter[index] +=1 
        myRender()
    }
}
const makeDecrement = (index:number) => {
    return () => {
        counter[index] -=1
        myRender()
    }
}
let counter:[number] = [0,0,0,0]
const Rows = () => {
    let r=[]
    for (let i=0; i<4; i++){
        r.push(<CounterComponent counter={counter[i]} increment={makeIncrement(i)} decrement={makeDecrement(i)}/>)
    }
    return r
}

const Main = () => <div>
    {
        Rows()
    }
 </div>

myRender = () => ReactDOM.render(<Main/>, document.getElementById("example"))

myRender()

