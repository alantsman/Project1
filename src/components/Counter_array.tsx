import * as React from "react";

export const CounterComponent = (props: {counter: number, increment: () => void, decrement: () => void}) =>
    <div>
        <h1>Number of clicks {props.counter}!</h1>
        <img src="http://findicons.com/files/icons/49/button/128/button_add.png" onClick={props.increment}>
        </img>
        <img src="http://findicons.com/files/icons/49/button/128/button_delete.png" onClick={props.decrement}>
        </img>
    </div>