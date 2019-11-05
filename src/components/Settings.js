import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRandomUsers, setNat } from "../actions/users";

class Settings extends Component {
  state = {
    nationalities: ["ch", "es", "fr", "gb"],
    checked: []
  };

  componentDidMount = () => {
    this.setState({ checked: [...this.props.nat] });
  };

  onClick = event => {
    event.preventDefault();
    this.props.setNat(this.state.checked);
  };

  handleCheckbox = event => {
    const target = event.currentTarget;
    const nat = target.getAttribute("value");
    if (target.checked) {
      this.setState({ checked: this.state.checked.concat(nat) });
    } else {
      let checked = this.state.checked;
      const index = checked.indexOf(nat);
      if (index > -1) {
        checked.splice(index, 1);
      }
      this.setState({ checked });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="nav">
          <Link to="/">Back</Link>
        </div>
        <div className="settings-wrapper">
          <h4>Country:</h4>
          <div className="choices-wrapper">
            {Object.keys(this.state.nationalities).map((key, index) => (
              <label key={key}>
                <input
                  type="checkbox"
                  key={key}
                  checked={this.state.checked.includes(
                    this.state.nationalities[key]
                  )}
                  value={this.state.nationalities[key]}
                  onChange={this.handleCheckbox}
                />
                {this.state.nationalities[key]}
              </label>
            ))}
          </div>
          <button type="submit" onClick={this.onClick}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  nat: user.nat
});

export default connect(
  mapStateToProps,
  { getRandomUsers, setNat }
)(Settings);
