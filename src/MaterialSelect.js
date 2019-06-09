import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from '@material/react-select';
import '@material/react-select/dist/select.css';

class App extends React.Component {
  state = {value: 'pomsky'};
 
  render() {
    const options = [{
      label: 'Pomsky',
      value: 'pomsky',
    }, {
      label: 'Golden Doodle',
      value: 'goldenDoodle',
      disabled: false,
    }];
 
    return (
      <Select
        label='Choose Dog'
        onChange={(evt) => this.setState({value: evt.target.value})}
        value={this.state.value}
        options={options}
      />
    );
  }
}

export default App;
