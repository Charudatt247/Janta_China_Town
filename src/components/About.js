import User from "./User";
import UserClass from "./UserClass";
// import UserContext from "../utils/UserContext";

const About = () => {
    return(
        <div>
            <h1>This is about us page</h1>
            {/* <div className="font-bold text-xl">
                loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1>{loggedInUser}</h1>};
                </UserContext.Consumer>
            </div> */}
            <h2>This is for tutorial purpose</h2>
            <User name="Charudatt" Location="Indore" />
            <UserClass name="Charudatt" Location="Dewas" />
        </div>
    )
};

export default About;