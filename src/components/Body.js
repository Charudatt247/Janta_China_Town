import ResturantCard, { withOpenLabel } from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const OnlineStatus = useOnlineStatus();
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [FilteredRestaruant, setFilteredRestaurant] = useState([]);

    const [SerachText, setSearchText] = useState("");

    const RestaurantCardOpen = withOpenLabel(ResturantCard);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9675929&lng=76.0534454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }

    if (OnlineStatus === false){
        return (
            <h1>you might be offline, please check your internet connection;</h1>
        )
    };

    const {loggedInUser, setUserName} = useContext(UserContext);

    return ListOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body-conatiner bg-red-100 ">
            <div className="flex items-center">
                <div className="search p-2 m-2 ml-20">
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={SerachText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-1 m-4 bg-green-100 rounded-lg" 
                    onClick={() => {
                        console.log(SerachText)

                        const filterdRestaurant = ListOfRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(SerachText.toLowerCase())
                        );

                        setFilteredRestaurant(filterdRestaurant);
                    }}>Search</button>
                </div>
                <div>
                <button className="px-4 py-1 m-4 bg-gray-100 rounded-lg"
                onClick={()=>{
                    const filteredList = ListOfRestaurant.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    setListOfRestaurant(filteredList);
                }}
            >
                Top Rated Restaurant
                </button>
                </div>
                <div >
                    <label>username : </label>
                    <input className="border border-black p-2 m-2"
                    value = {loggedInUser}
                    onChange={(e)=>setUserName(e.target.value)}
                    />

                </div>
                
            </div>
            <div className="flex flex-wrap ml-20">
            {
            FilteredRestaruant.map((restaurant) => 
                (<Link 
                    key={restaurant.info.id} 
                    to = {"/restaurant/" + restaurant.info.id}>
                        {
                            restaurant.info.isOpen ? <RestaurantCardOpen resdata={restaurant}/> : <ResturantCard  resdata={restaurant} />
                        }
                        
                </Link>))
            }

            </div>
        </div>
    );
};

export default Body;