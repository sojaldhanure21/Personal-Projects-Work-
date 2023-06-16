import CurranciesSelector from "../../Components/Common/CurranciesSelectore"
import LoginPage from "../../Components/SearchWidget/LoginContainer"

function Header() {
    return (
        <>
            <div className="menu">
                <div className="menu-container">
                    <div className="menu-row">
                        <div className="currancy-wrapper">
                            <CurranciesSelector />
                        </div>
                        <div className="logo-wrapper">
                            <img src="https://test.igoroom.com/igoroom/v2/img/ui/logo.svg" alt="Logo" />
                            <div className="login-container">
                                <button>Sign Up</button>
                                {/* <LoginPage /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Header