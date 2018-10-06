import React, { Component } from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";

// const phantom = {
//     display: 'flex',
//     height: '100px',
//     justifyContent: 'center',
//     alignItems: 'center',
//     verticalAlign: 'middle',
//     textAlign: "center",
//     width: "100%",


// }

// const style = {
//     backgroundColor: "#000000",
//     borderTop: "1px solid #E7E7E7",
//     color: "#ffffff",
//     left: "0",
//     bottom: "0",
//     height: "50px",

// }
const phantom = {
    display: 'flex',
    height: '100px',
    width: "100%",
    border: "1px solid #000000",
}

const style = {
    backgroundColor: "#000000",
    color: "#ffffff",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    width: "100%",
    position: 'reletive',
    bottom: 0,
}




// function Footer({ children }) {

//     return (
//         <div>
//             <div style={style}>

//                 Hello from Footer
//                 {this.state.date}
//                 {children}
//             </div>
//         </div>
//     )
// }

// export  Footer

export default class Footer extends Component {
    constructor() {
        super()
        let d = new Date()
          this.state = {
            day: d.getDay(),
            month: d.getMonth(),
            date: d.getDate(),
            year: d.getFullYear(),
            time: d.toLocaleTimeString()
          }
        this.countingSecond = this.countingSecond.bind(this)
      }
      countingSecond() {
        let d = new Date()
        this.setState({
          day: d.getDay(),
          month: d.getMonth(),
          date: d.getDate(),
          year: d.getFullYear(),
          time: d.toLocaleTimeString()
        })
      }
      componentWillMount() {
        setInterval(this.countingSecond, 1000)
      }

    render() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        return (
            <div>
                <div style={style}>
                    {days[this.state.day]}, {months[this.state.month]} {this.state.date}, {this.state.year} {this.state.time}
                </div>
            </div>
        );
    }
}