import React from "react";
import "./App.css";
import doorOpen from "./assets/door-open.png";
import doorclosed from "./assets/door-closed.png";

function AppFunc(props) {
    const [state, setState] = React.useState({ door: false, accepted: null, rejected: null })
    const { visitors, whilelist } = props;


    async function handleVisitor(id) {
        if (state.door) return;

        if (whilelist.includes(id)) {
            setState({ door: true, accepted: id });
            setTimeout(() => {
                setState({ door: false, accepted: null });
            }, 1500);
        } else if (await handleNewVisitor(id)) {
            setState({ door: true, accepted: id });
            setTimeout(() => {
                setState({ door: false, accepted: null });
            }, 1500);
        } else {
            setState({ door: false, rejected: id });
            setTimeout(() => {
                setState({ rejected: null });
            }, 1500);
        }
    }

    async function handleNewVisitor(id) {
        try {
            const response = await fetch(`https://run.mocky.io/v3/0403127a-302a-4a3c-8728-c93c982bd71b`);
            const data = await response.json();
            return (data.whitelist.includes(id));
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="control">
            <div className="door-frame">
                <img src={state.door ? doorOpen : doorclosed} alt="Door" />
            </div>
            <div className="visitors row">
                {visitors.map((visitor) => (
                    <img
                        src={visitor.icon}
                        alt={visitor.id}
                        key={visitor.id}
                        role="button"
                        className={`${state.accepted === visitor.id ? "accepted" : ""} ${state.rejected === visitor.id ? "rejected" : ""}`}
                        onClick={() => handleVisitor(visitor.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default AppFunc;