function StripeButton() {
    return (
        <form action="https://buy.stripe.com/test_dR6aGE9dI1YDgus5kk">
            <button className="font-thin transition ease-in-out duration-700 
            hover:-translate-y-0.5 hover:scale-110 active:translate-y-1">
                Buy for $100
            </button>
        </form>
    )
}

export default StripeButton;