import { useContext } from "react";
import { CRD_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const ResturantCard = (props) => {
    const {resdata} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resdata?.info;
    const {deliveryTime} = resdata?.info?.sla;
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="m-3 p-3 w-[240px] bg-red-50 rounded-lg hover:bg-pink-100 ">
            <img 
            className="w-40 h-40 object-cover rounded-lg "
            alt="noodles" 
            src={CRD_URL + cloudinaryImageId} 
            />
            <h3 className="py-4 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating + " Star"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + " minutes"}</h4>
            <h4>user: {loggedInUser}</h4>
        </div>
    )
};

export const withOpenLabel = (ResturantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <ResturantCard {...props}/>
            </div>
        );
    };
};

export default ResturantCard;