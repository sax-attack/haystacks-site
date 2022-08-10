import NavHeader from "../Common/NavHeader";
import Headshot from "../Common/Headshot";

import stockMember from "../assets/stockMember.png"

let HeadshotPlaceholder = () => {
    return (<Headshot
        imageSource={stockMember}
        name="First Lastname"
        position="Position Here"
        brief="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    />)
}
const People = () => {

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <NavHeader />

                <h1>We are a team of lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet placerat mi. sollicitudin feugiat laoreet.</h1>

                <div>



                    <div>
                        <h1>Founding Team</h1>
                        <div className="headshot-section-container">
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                        </div>
                    </div>

                    <div>
                        <h1>Leadership Team</h1>
                        <div className="headshot-section-container">
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                        </div>
                    </div>

                    <div>
                        <h1>Advisory Board</h1>
                        <div className="headshot-section-container">
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                            <HeadshotPlaceholder />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default People