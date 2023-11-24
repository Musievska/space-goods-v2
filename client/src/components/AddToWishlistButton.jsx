import { HeartIcon } from "@heroicons/react/24/outline";

export const AddToWishlistButton = ({ onClick }) => {

    
    
    return (
        <button onClick={onClick} className="add-to-wishlist-button">
            <HeartIcon className="ml-1 h-8 w-8 icon-bounce" />
        </button>
    );
}