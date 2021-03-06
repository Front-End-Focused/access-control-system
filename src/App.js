import React from "react";
import "./App.css";
import doorOpen from "./assets/door-open.png";
import doorclosed from "./assets/door-closed.png";

class App extends React.Component {
  state = {
    door: false,
    accepted: null,
    rejected: null,
  };

  handleVisitor(id) {
    if (this.state.door) return;

    if (this.props.whilelist.includes(id)) {
      this.setState({
        accepted: id,
        door: true,
      });
      setTimeout(() => {
        this.setState({
          accepted: null,
          door: false,
        });
      }, 1500);
    } else {
      this.setState({
        rejected: id,
        door: false,
      });
      setTimeout(() => {
        this.setState({
          rejected: null,
        });
      }, 1500);
    }
  }

  render() {
    const { visitors } = this.props;
    const { door, accepted, rejected } = this.state;

    return (
      <div className="control">
        <div className="door-frame">
          <img src={door ? doorOpen : doorclosed} alt="Door" />
        </div>
        <div className="visitors row">
          {visitors.map((visitor) => (
            <img
              src={visitor.icon}
              alt={visitor.id}
              key={visitor.id}
              role="button"
              className={`${accepted === visitor.id ? "accepted" : ""} ${
                rejected === visitor.id ? "rejected" : ""
              }`}
              onClick={() => this.handleVisitor(visitor.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
