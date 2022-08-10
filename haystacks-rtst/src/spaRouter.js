import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./page_splash";
import Home from "./page_home";
import MarketSolutions from "./page_marketSolutions";
import SolutionsSFR from "./page_sfrSolutions";
import People from "./page_people";
import Published from "./page_published";


const SpaRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Splash />} />
                    <Route path="home" element={<Home />} />
                    <Route path="market" element={<MarketSolutions />} />
                    <Route path="portfolio" element={<SolutionsSFR />} />
                    <Route path="people" element={<People />} />
                    <Route path="published" element={<Published />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default SpaRouter