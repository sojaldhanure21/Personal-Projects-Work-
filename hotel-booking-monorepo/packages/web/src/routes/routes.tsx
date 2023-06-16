import { Routes, Route } from "react-router";
import SearchWidget from "../pages/Home/SearchPage";
import SearchResults from "../pages/Results/SearchResults";
import DetailsPage from "../pages/DetailsPage";
import LoginPage from "../Components/SearchWidget/LoginContainer";
import SearchFormContainer from "../pages/Home/SearchFormContaner";
function MainRoutes() {
    return (
            <Routes>
                {/* <Route path="/" element={<LoginPage />} /> */}
                <Route path="/" element={<SearchFormContainer />} />
                <Route path="/results" element={<SearchResults />} />
                <Route path="/details" element={<DetailsPage />} />
            </Routes>
    )
}
export default MainRoutes