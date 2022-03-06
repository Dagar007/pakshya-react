import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Pakshya</h3>
                <span className="loginDesc">Connect with freinds and world arround you.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    <input placeholder="Password Again" type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log in</button>
                </div>
            </div>
        </div>
    </div>
  )
}
