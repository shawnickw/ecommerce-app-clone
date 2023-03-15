import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Listings from "./components/Listings";
import AuthModal from "./firebase/AuthModal";


function App() {
  const modalstate = useSelector((state: any) => state.modal.value)
  return (
    <div className="w-full h-screen">
      <Header />
      <Listings />
      {modalstate && <AuthModal />}
      <Footer />
    </div>
  )
}

export default App;
