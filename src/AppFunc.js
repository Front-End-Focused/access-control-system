import React, { useState } from "react";
import "./App.css";
import doorOpen from "./assets/door-open.png";
import doorclosed from "./assets/door-closed.png";


function AppFunc(props) {

    const [door, setDoor] = useState(false);

    const [color, setColor] = useState()
    
    const { visitors, whilelist } = props;
    

    function handleVisitor(id) {
        if (door) return;

        if (whilelist.includes(id)) {
            setDoor(true);

            setTimeout(() => {
                setDoor(false);
            }, 1500);
          } else {
            setColor('rejected');
          }
    }
    


    return (
        <div className="control">
          <div className="door-frame">
            <img src={door ? doorOpen : doorclosed} alt="Door" />
          </div>
          <div className="visitors row rejected">
            {visitors.map((visitor) => (
                <img
                className={visitor.id}
                src={visitor.icon}
                alt={visitor.id}
                key={visitor.id}
                role="button"
                onClick={() => handleVisitor(visitor.id)}
              />
            ))}
          </div>
        </div>
      );
}


export default AppFunc;