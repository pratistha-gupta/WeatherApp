import React from 'react';


import WeatherApp from './WeatherApp';

//this is need to be written <= 16th version, else if u are using React.
//1st necessary consition

const App = () => {
  //2nsd necessary condition
  // i.e. functional component
  return (
    //without return othing will work
    // bcoz it will ask for something to render

    //USING DIV:
    // <div>
    //  <h2>Hello, world... This is my 1st app</h2>
    // </div>
    //  <>
    //  <h2>Hello,jkfs  world... This is my 1st app</h2>
    //  {/* returning anothor component in app */}
    //  <Content/>   
    //  {/* <> .. </>  tags for react.fragment */}
    //  </>
    // <UseState/>
    // <UseEffect/>
    <WeatherApp/>
     

    //USING section
    // <section>
    //   <h2>Hello, world... This is my 1st app</h2>
    // </section>
    // <p>Hii</p>  ........will give error
    //return kevl ek hee element ho skta
    //use div or react fragment to wrap all ur code in JSX code
  )
}
  // function App(){
  //   return (<h2>Hello, world... This is my 1st app</h2>);
  // }
  // const Content = () =>{
  //   //this type of components are called Nested components
  //   return(
  //     <p>This is the main content of the site</p>
  //   )
  // }


export default App;
