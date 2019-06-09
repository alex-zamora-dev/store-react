import React, { Component } from 'react';

class Select extends Component {
    state = {
        show: true
    }
    handleChange() {
        this.setState({ show: false });
    }
    render() {
        return (
            <div className="mdc-select">
                <i className="mdc-select__dropdown-icon" />
                <select className="mdc-select__native-control" onChange={this.handleChange}>
                <option value disabled />
                <option value="grains">
                    Bread, Cereal, Rice, and Pasta
                </option>
                <option value="vegetables">
                    Vegetables
                </option>
                <option value="fruit">
                    Fruit
                </option>
                </select>
                <label
                    className="mdc-floating-label"
                    style={{display: this.state.show ? 'block' : 'none' }}
                >
                    Pick a Food Group
                </label>
                <div className="mdc-line-ripple"></div>
            </div>
        );
    }
}

export default Select;