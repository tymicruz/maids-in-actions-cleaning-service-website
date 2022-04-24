const Home = ({ myRef }) => {


    return (
        <div ref={myRef} className="hero">
            <div className="half-hero-1">
                <h1>
                    ATTENTION
                </h1>
                <ul>
                    <li className="hero-item">Property Managers,</li>
                    <li className="hero-item">Real Estate Agents,</li>
                    <li className="hero-item">Renters and Homeowners ...</li>
                </ul>
                <p>Let us do the Cleaning!</p>
                <a href="https://maidsinactioncs.com/request-quote/"><button >FREE CONSULTATION</button></a>
                <div className="hero-list">
                    <div>
                        <i className="fa-solid fa-check"></i>
                        Affordable prices
                    </div>
                    <div>
                        <i className="fa-solid fa-check"></i>
                        Military discounts
                    </div>
                    <div>
                        <i className="fa-solid fa-check"></i>
                        100% satisfaction guaranteed
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home