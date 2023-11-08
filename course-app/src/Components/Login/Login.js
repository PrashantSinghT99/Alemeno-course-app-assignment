// src/Login.js
import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../Utility/loggedUserSlice";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        setSubmitButtonDisabled(false);
        dispatch(setUser(user));
        navigate("/course");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div>
          <b className="error">{errorMsg}</b>
        </div>
        <div className="login-footer">
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Login
          </button>
          <Link className="link" to="/signup">
            Signup here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
