import SignedInModal from "../firebase/SignedInModal";
import ToggleAuthModal from "../firebase/ToggleAuthModal";
import { useSelector } from "react-redux";

function Header() {
    const signed = useSelector((state:any) => state.signed.value)

    return (
        <div className="fixed top-0 left-0 right-0 bg-white
        flex justify-center items-center h-12">
            <img src="nikelogo.png" className="h-8"/>
            {signed ? <SignedInModal /> : <ToggleAuthModal />}
        </div>
    )
}

export default Header;