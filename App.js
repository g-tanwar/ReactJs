import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// JSX - is not html in javaScript it is a  HTML like or XML like  syntax

// const jsxHeading = ( <h1 id = "heading "> Hello World using jsx</h1>) ; // it is similar to the create element by reac.createElement  --> This is not proper js code js engine will not be able to understand the code  
// if u wirte ur jsx in multiple lines we need()


// console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading)

// before this code going to the js engine it is transpiled (converted to understandable form of js engine ) by parcel

// this transpilation is done by Babel (js compiler/transpiler)

// JSX => React.CreateElement => React Element - Object => HTML Element (render) 


/*React Component

class based Component - O ld (uses js classes to create components )
functional based Component - New (uses js functions to create componenrts)new */ 


// Functional components needs to be startd with a capital letter  - A functional component is a function that returns a react element  

// Babel is the SuperHero converting our jsx code into react code 

const Title = () => <h1 id="head" tabIndex="5">Namste React Using JSX</h1> 

const func = () => <h2>hii myself a function called inside the react component</h2>
const jsVariable = "I just am a JS variable"; 

const reactElement = (<h1>Hii... myself react element in a react component</h1>)

const HeadingComponent1 = () =>{
    return <div id="container">
                <Title/> putting a component inside a component{/* we may also write <Title></Title */ }
                <h1 className="heading">This is a functional Component</h1> {/*we can write any peice of js code*/}
                <h2>{jsVariable}</h2>
                {console.log("bhaiiishaab console bhi hogya")}
                {reactElement}
                {func()}{/* we may also call a function inside this  */}
            </div>
}

// this is known as component composition - composing two or more components in one another

const HeadingComponent2 = () => (<h1>This is a functional Component</h1>) // this is also a valid syntax


// root.render(<Title/>)
root.render(<HeadingComponent1/>)