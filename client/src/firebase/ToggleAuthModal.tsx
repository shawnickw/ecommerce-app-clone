import { useDispatch } from "react-redux";
import { setMessage } from "../redux/messageSlice";
import { setTrue } from "../redux/modalSlice";

function ToggleAuthModal() {
    const dispatch = useDispatch()
    const clickedOn = () => {
        dispatch(setTrue())
        dispatch(setMessage(""))
    }

    return (
        <div className="flex items-center">
            <button className="absolute right-3 font-bold hover:text-slate-600"
            onClick={clickedOn}>
                SIGN IN
            </button>
        </div>
    )
}

export default ToggleAuthModal;