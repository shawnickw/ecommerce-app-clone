import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setSignedOff } from "../redux/signedSlice";

function SignedInModal() {
    const auth = getAuth();
    const user = auth.currentUser?.email;
    const dispatch = useDispatch()

    const Clicked = () => {
        signOut(auth).then(() => {
            dispatch(setSignedOff())
        })
    }

    return (
        <div className="flex items-center">
            <button className="absolute right-3 font-bold hover:text-slate-600"
            onClick={Clicked}>
                Sign Out
            </button>
            <div className="font-bold absolute right-3 bottom-7">
                {"Signed in as " + user}
            </div>
        </div>
    )
}

export default SignedInModal;