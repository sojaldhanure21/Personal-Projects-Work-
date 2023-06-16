import { useReducer } from "react"

const userReducer = (state: any, action: any) => {
    if (action.type === "User_ID_Input") {
        console.log("action", action.value)
        return { value: action.value, isValid: action.value.includes("@") }
    }
    if (action.type === "User_Validation") {
        console.log("state", state.value)

        return { value: state.value, isValid: state.value.includes("@") }
    }

    return { value: '', isValid: false }
    console.log(state)
}
function LoginPage() {
    const [userID, dispatchUSer] = useReducer(userReducer, {
        value: '',
        isValid: null,
    });

    const userAuthentiaction = (e: any) => {
        console.log("userAuthentiaction", e)
    }
    const userAuthenticator = (e: any) => {
        console.log("User", e)
        const { value } = e.target
        dispatchUSer({ type: "User_ID_Input", value: value })
    }
    const passwordAuthenticator = (e: any) => {
        console.log("Password", e)
    }

    const validateEmailHandler = () => {
        dispatchUSer({ type: "User_Validation" })
    }

    const validatePasswordHandler = () => {

    }

    return (<>
        <div className="login-container-main">
            <form action="" onSubmit={(e) => userAuthentiaction(e)} >
                <label>Login to your account</label>
                <div className={userID.isValid == true ? "userId" : "userIdInvalid"}>
                    <label></label>
                    <input
                        type="text"
                        placeholder="Email Address"
                        onChange={(e) => userAuthenticator(e)}
                        className="loginpage"
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className="password">
                    <label></label>
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => passwordAuthenticator(e)}
                        onBlur={validatePasswordHandler} />
                </div>
                <label>Forgot Password</label>
                <button onClick={userAuthentiaction}>Sign IN</button>
            </form>
            <label>Or sign in with</label>
            <div className="signin-links">
                <label htmlFor="">Mail</label>
                <label htmlFor="">Google</label>
                <label htmlFor="">Fb</label>
            </div>
        </div>
    </>);
}

export default LoginPage;