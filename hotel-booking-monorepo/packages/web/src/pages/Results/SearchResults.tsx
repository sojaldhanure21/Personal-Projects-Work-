import { useNavigate } from "react-router-dom";
function SearchResults() {
    const navigate = useNavigate();

    const movetoHome = () => {
        navigate('/')
    }
    const movetoDetails = () => {
        
        navigate('/details')
    }
    return (
    <>
        <div>Welcome to result page</div>
        <button onClick={movetoHome} >Home Page</button>
        <button onClick={movetoDetails} >Details Page</button>
    </>
    );
}
export default SearchResults;