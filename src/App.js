import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  render() {
   
    return (
    <div className="App">
      <Routes></Routes>
    </div>)
  }
}

export default App;

































// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     counter: 0,
//   };

//   increment = () => this.setState({ counter: 5 });

//   render() {
//     return (
//       <div className="App">
//         <button onClick = {() => this.increment()}>Button</button>
//         {/* You can write {this.increment} only */}
//         <div>Div 1{this.state.counter}</div>
//         <div>Div 2</div>
//         <div>Div 3</div>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import "./App.css";
// //import * as styles from './styles';

// class App extends Component {
//   render() {
//     // const styles = {
//     //   border: "solid",
//     //   textAlign: "center",
//     //   boxShadow: "2px 2px",
//     // };
//     //inline da yapilabilir, bu styled components pattern gibi yaptik. styles, style atrribute icin value yapildi.
//     //ya da bu ust kisim styles.js icine ayri file olusturarak da atilabilir. styles.js'den alirsak {styles.styles} yazariz.

//     return (
//       <div className="App">
//         {React.createElement(
//           'button',
//           {className:'App'},
//           "React"
//         )}
//         {/* <div style={styles}>Style</div>
//         <button>Button 1</button> */}
//       </div>
//     );
//   }
// }
// const Appinstance = new App();
// console.log(Appinstance);
// export default App;
