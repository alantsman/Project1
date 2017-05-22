import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

const IsTypescript = (props: HelloProps) => {
    if (props.compiler == "TypeScript") {
        return  <b>TYPESCRIPT</b>
    } else {
        return  <em>not typescript...</em>
    }
}

const IsReact = (props: HelloProps) => {
    if (props.framework == "React") {
        return  <b>REACT</b>
    } else {
        return  <em>not React...</em>
    }
}

export const Hello = (props: HelloProps) =>
    <div>
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
        <p>This is an example of a paragraph</p>
        <IsTypescript {...props}/>
        <IsReact {...props}/>
    </div>