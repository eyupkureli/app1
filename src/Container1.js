// import React, { Component } from "react";

// class Container1 extends Component {
//    constructor(props) {
//       super(props)
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//    }
//   state = {
//     value: ' '
//   };

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     console.log(this.state.value);
//   }

//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <form onSubmit={this.handleSubmit}>
//           <label>Name</label>
//           <input id="name" onChange={this.handleChange} type="text" />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Container1;















// import React, { Component } from 'react';

// class Container1 extends Component {
//    Arr1 = [
//       {id: 1, text: 'text 1', number:1},
//       {id: 2, text: 'text 2', number:2},
//       {id: 3, text: 'text 3', number:3},
//       {id: 4, text: 'text 4', number:4},
//       {id: 5, text: 'text 5', number:5}
//    ]

//    RenderListItem = (props) => (
//       <div>
//          {props.item.text}
//        <p>{props.item.number}</p>
//       </div>
//    )

//   render() {
//     return(
//       <div>
//          {this.Arr1.map((item, index) =>(<this.RenderListItem item = {item} key = {item.id}/>))}
//       </div>
//     )
//   }
// }

// export default Container1;
