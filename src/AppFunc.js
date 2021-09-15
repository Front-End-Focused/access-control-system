import React, { useRef } from "react";
import "./App.css";
import doorOpen from "./assets/door-open.png";
import doorclosed from "./assets/door-closed.png";

function AppFunc(props) {
    const { visitors, whilelist } = props;
    const list = useRef(whilelist);
    const [state, setState] = React.useState({ door: false, accepted: null, rejected: null })


    async function handleVisitor(id) {
        if (state.door) return;
        if (list.current.includes(id)) {
            setState({ door: true, accepted: id });
            setTimeout(() => {
                setState({ door: false, accepted: null });
            }, 1500);
        } else {
            try {
                const response = await fetch(`https://run.mocky.io/v3/0403127a-302a-4a3c-8728-c93c982bd71b`);
                let data = await response.json();
                if (data.whitelist.includes(id)) {
                    list.current = data.whitelist;
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
            } catch (error) {
                console.error(error.message);
            }
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