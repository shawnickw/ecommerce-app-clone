import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setFalse } from "../redux/modalSlice";
import { setEmail } from "../redux/emailSlice";
import { setPassword } from "../redux/passwordSlice";
import { setMessage } from "../redux/messageSlice";
import { setSignedIn } from "../redux/signedSlice";

function AuthModal() {
    const email = useSelector((state: any) => state.email.value)
    const password = useSelector((state: any) => state.password.value)
    const message = useSelector((state:any) => state.message.value)

    const dispatch = useDispatch()
    const clickedOff = () => {
        dispatch(setFalse())
    }

    const signUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userMessage = "Signed up as " + userCredential.user.email;
            dispatch(setMessage(userMessage))
            dispatch(setSignedIn())
            dispatch(setFalse())
        })
        .catch((error) => {
            const errorMessage = error.message;
            dispatch(setMessage(errorMessage))
        });
    };

    const signIn = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userMessage = "Signed in as " + userCredential.user.email;
            dispatch(setMessage(userMessage))
            dispatch(setSignedIn())
            dispatch(setFalse())
        })
        .catch((error) => {
            const errorMessage = error.message;
            dispatch(setMessage(errorMessage))
        });
    };

    return (
        <div className="bg-white opacity-90 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col justify-center py-12 px-24
                border-4 border-black rounded-xl">
                        {message}
                        <input
                            className="border-2 border-black rounded m-2 p-0.5" 
                            placeholder="Email Sign Up & In"
                            onChange={(e) => dispatch(setEmail(e.target.value))}
                        />
                        <input
                            className="border-2 border-black rounded m-2 p-0.5" 
                            placeholder="Password Sign Up & In"
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                        />
                        <button 
                            onClick={signUp}
                            className="border-2 border-black rounded m-2 p-0.5"> 
                                Sign Up
                        </button>
                        <label className="ml-2 mr-2">
                            Already have an account?
                        </label>
                        <button
                            onClick={signIn}
                            className="border-2 border-black rounded m-2 p-0.5">
                                Sign In
                        </button>
                        <button
                            onClick={clickedOff}
                            className="border-2 border-black rounded m-2 p-0.5">
                            Close
                        </button>
                </div>
            </div>
        </div>
    )
}

export default AuthModal;