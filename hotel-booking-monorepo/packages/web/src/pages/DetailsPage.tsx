import { useNavigate } from "react-router"

const DetailsPage = () => {
    const navigate = useNavigate()
    const moveHome = () => {
        navigate('/')
    }
    return (<>
        <label>Welcome to details page</label>
        <button onClick={moveHome}>Home</button>
    </>)
}

export default DetailsPage