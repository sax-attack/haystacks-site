import Common from "../Common"
import bgGeometryA from "../assets/geometry 1.png"

import ExplorationLogo from '../assets/HaystacksLogoExploration.png'
// 
// Splash page
const Splash = () => {

    return (
        <div className="page-wrapper">

            <img className="img-bg-geometry" src={bgGeometryA} alt="background geometry" />

            <div className="page-content">

                <Common.BasicHeader />

                <div className="content-section content-top">
                    <h1> Grow, optimize and increase returns of your real estate portfolio with Haystacks.AI </h1>
                    <button className="btn-clean" id="btn-request-demo"> REQUEST A DEMO </button>
                </div>

                <Common.ContentBreak />

                <div className="content-section">
                    <h2> THE PROBLEM </h2>


                    <div className="content-subsection">
                        <span className="content-copy-feature"> The real estate market is a global industry with glaring inefficiencies</span>
                    </div>
                    <div className="content-subsection">
                        <span className="content-copy-feature"> Property management is fragmented</span>

                    </div>
                    <div className="content-subsection">
                        <span className="content-copy-feature"> Investment relies on historial data—an ineffective predictor of future returns.</span>

                    </div>
                </div>

                <Common.ContentBreak />

                <div className="content-section">
                    <div className="sticky">
                        <h2 className=""> OUR SOLUTIONS </h2>
                        <br />
                    <img className="img-parallax" src={ExplorationLogo} alt='Haystacks imagery' />

                    </div>
                    <div className="content-scroll-container">


                    </div>



                    <div className="content-scroll-item">
                            <h1>Market<br />[Insider]</h1>
                            <div className="subsection-scroll-copy">
                                <p>Which micro-markets meet your investment criteria? </p>
                                <p>Weight traditional and alternative datasets to get a complete and accurate view of micro-market fit.</p>
                            </div>
                        </div>


                        <div className="content-subsection-scroll">
                            <h1>Portfolio<br />Architect</h1>
                            <div className="subsection-scroll-copy">
                                <p>Which micro-markets meet your investment criteria? </p>
                                <p>Weight traditional and alternative datasets to get a complete and accurate view of micro-market fit.</p>
                            </div>
                        </div>

                        <div className="content-subsection-scroll">
                            <h1>Portfolio<br />Simulator</h1>
                            <div className="subsection-scroll-copy">
                                <p>Which micro-markets meet your investment criteria? </p>
                                <p>Weight traditional and alternative datasets to get a complete and accurate view of micro-market fit.</p>
                            </div>
                        </div>




                </div>

            </div>


            {/* <img className="img-parallax" src={ExplorationLogo} alt='Haystacks imagery' /> */}
            {/* <div>
                <h3> Our Solutions </h3>
                <br />
                <h1> Portfolio <br /> Simulator </h1>

            </div> */}
            {/* <h1> Market </h1> */}
        </div>
    )
}

export default Splash