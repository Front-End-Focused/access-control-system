import React from "react";
import "./App.css";
import doorOpen from "./assets/door-open.png";
import doorclosed from "./assets/door-closed.png";

class App extends React.Component {
  state = {
    door: false,
  };

  handleVisitor(id) {
    if (this.state.door) return;

    if (this.props.whilelist.includes(id)) {
      this.openDoor();
      setTimeout(() => {
        this.closeDoor();
      }, 1500);
    } else {
      this.closeDoor();
    }
  }

  openDoor() {
    this.setState({ door: true });
  }

  closeDoor() {
    this.setState({ door: false });
  }

  render() {
    const { visitors } = this.props;
    const { door } = this.state;

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
              onClick={() => this.handleVisitor(visitor.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
