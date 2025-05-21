import { useState } from "react";

const User = ({name,Location}) => {
    const [count, setCount] = useState(0);

    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count +1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <h2>Name :{name}</h2>
            <h3>Location : {Location}</h3>
            <h4>contact : Charudatt111</h4>
        </div>
    )
};

export default User;