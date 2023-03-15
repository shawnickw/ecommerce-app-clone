import { useSelector } from "react-redux";
import NotAuthButton from "../payment/NotAuthButton";
import StripeButton from "../payment/StripeButton";

function Listings() {
    const signed = useSelector((state:any) => state.signed.value)

    return (
        <div className="h-full flex flex-wrap mt-14">
            <div className="flex flex-col flex-wrap overflow-x-auto sm:w-full h-60 ">
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-White-Black.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Grey-Fog.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Rose-Whisper.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
            </div>
            <div className="flex flex-col flex-wrap overflow-x-auto sm:w-full h-60 ">
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Valentines-Day.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Summit-White-Midnight-Navy.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Active-Fuchsia.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
            </div>
            <div className="flex flex-col flex-wrap overflow-x-auto sm:w-full h-60 ">
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Industrial-Blue-Sashiko.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Retro-Red-Swoosh-Panda.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Next-Nature-White-Mint.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
            </div>
            <div className="flex flex-col flex-wrap overflow-x-auto sm:w-full h-60 ">
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Retro-QS-Flash-White-Argon-Blue.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Light-Orewood-Brown-Sashiko.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Essential-Paisley-Pack-Pink.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
            </div>
            <div className="flex flex-col flex-wrap overflow-x-auto sm:w-full h-60 ">
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Reverse-Brazil.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Phantom-Metallic-Gold.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
                <div className="w-screen sm:w-1/3 h-full flex flex-col justify-center items-center">
                    <img src="Nike-Dunk-Low-Retro-White-Pure-Platinum.avif"
                    className="h-fit w-fit"/>
                    {signed ? <StripeButton /> : <NotAuthButton />}
                </div>
            </div>
        </div>
    )
}

export default Listings;
