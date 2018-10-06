import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Content from './components/Content';
import Image from './components/Image';
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';

const colorStyle = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
  },
});


export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={colorStyle}>
          <Header />
          <Image />
          <Content />
          <Footer />
        </MuiThemeProvider>
      </div>)
  }
}



