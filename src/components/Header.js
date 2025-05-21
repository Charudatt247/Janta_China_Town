import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const[loginbtn,setloginbtn] = useState(["Login"]);
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);   
    // console.log(user);

    const cartItems = useSelector((store) => store.cart.item);
    console.log(cartItems);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src = {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4 cursor-pointer">
                        <Link to="/cart">Cart({cartItems.length})</Link>
                    </li>
                    <button className="login-btn cursor-pointer"
                    onClick={()=>{
                        loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login")
                    }}>{loginbtn}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;