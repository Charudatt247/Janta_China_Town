import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (!resInfo || !resInfo?.cards) return <Shimmer />;
    // console.log(resInfo);

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
         c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    
    // console.log(subcategories);


    return(
        <div className="text-center bg-red-100">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* category accordion */}
            {categories.map((category, index) => (
                <RestaurantCategory 
                key={category.card.card.title} 
                data={category.card.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />
                ))}
        </div>
    )
};

export default RestaurantMenu;