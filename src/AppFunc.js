import React, {Component} from "react";
import doorOpen from "./assets/door-open.png"
import doorclosed from "./assets/door-closed.png";
import "./App.css"

function AppFunc(props) {
    const {visitors, whilelist} = props;
    const [user, setUser] = React.useState({
        door: false,
        green: null,
        red: null,
        yellow: null,
    });
    // const [active, setActive] = React.useState("black");
    console.log(whilelist);

    function handleVisitor(visitor){
        if (user.door) return;
        if(whilelist.includes(visitor.id)){
            setUser({
                door: true,
                green: visitor.id,
                red: null
            });

            setTimeout(() => {
                setUser({
                    door: false,
                    green: '',
                    red: '',
                })
            }, 1500);

        }else if(visitors[visitors.length - 1].id === visitor.id){
            setUser({
                door: true,
                yellow: visitor.id,
                green: '',
                red: '',
            });
            setTimeout(()=>{
                setUser({
                    door: false,
                    yellow: '',
                    green: '',
                    red: '',
                })
            }, 1500);
        }else{
            setUser({
                door: false,
                green: '',
                red: visitor.id,
            })
            setTimeout(() => {
                setUser({
                    door: false,
                    green: '',
                    red: '',
                })
            }, 1500);
        }

    }

    return (
        <div className="control">
            <div className="door-frame">
                <img src={user.door ? doorOpen : doorclosed } alt="Door"/>
            </div>
            <div className="visitors row">
                {visitors.map((visitor) => (
                    <img
                        className={`${(user.green === visitor.id) ? "green" : ''}  ${(user.red === visitor.id) ? "red" : ''} ${(user.yellow === visitor.id)? "yellow" : ''}`}
                        src={visitor.icon}
                        alt={visitor.id}
                        key={visitor.id}
                        role="button"
                        onClick={() => handleVisitor(visitor)}
                    />
                ))}
            </div>
        </div>
    );
}

export default AppFunc;