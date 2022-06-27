import './App.css';
import { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
// import { ConfigureStore } from './redux/configureStore';


class App extends Component {

  render() {
    return (
        <BrowserRouter>
        <div>
          <Main/>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
