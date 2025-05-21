import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    // const [showItems, setShowItems] = useState(true);

    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
    };
    return(
        <div className="bg-red-50">
            {/* accordain header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} </span>
                    <span>👇</span>
                </div>
                {showItems &&<ItemList items={data.itemCards || data.categories[0].itemCards}/>}
            </div>
            
            {/* accordain body */}
            
        </div>
    );
};



export default RestaurantCategory;