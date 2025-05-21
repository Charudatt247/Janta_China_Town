import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }
    
    render() {
        const{ name, Location } = this.props;
        const{count} = this.state;
        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>
                <h2>Name : {name}</h2>
                <h3>Location : {Location}</h3>
                <h4>contact : Charudatt111</h4>
            </div>
        )
    }
};

export default UserClass;