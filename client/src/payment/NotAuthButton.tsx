import { useDispatch } from "react-redux";
import { setMessage } from "../redux/messageSlice";
import { setTrue } from "../redux/modalSlice";

function NotAuthButton() {
    const dispatch = useDispatch()
    const clickedOn = () => {
        dispatch(setTrue())
        dispatch(setMessage("Must be authenticated to purchase."))
    }

    return (
        <button className="font-thin transition ease-in-out duration-700 
        hover:-translate-y-0.5 hover:scale-110 active:translate-y-1"
        onClick={clickedOn}>
            Buy for $100
        </button>
    )
}

export default NotAuthButton;