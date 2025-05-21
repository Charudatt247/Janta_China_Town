import { useDispatch } from "react-redux";
import { CRD_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items = [] }) => {
    // console.log(items); 

    const dispatch = useDispatch();

    const HandleAddItem = (item) => {
        dispatch(addItem(item));
    };
    return(
        <div>
            {items.map(item => 
                <div key = {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                        <span className="font-semibold">{item.card.info.name}</span><br></br>
                        <span className="text-sm">₹{item.card.info.price/100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className = "w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 my-19 mx-8 bg-black text-white rounded-lg shadow-lg"
                            onClick={() => HandleAddItem(item)}
                            >Add +</button>
                        </div>
                        <img src={CRD_URL + item.card.info.imageId} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemList;