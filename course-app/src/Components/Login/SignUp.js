import React, { useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../Utility/loggedUserSlice";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        setSubmitButtonDisabled(false);
        const user = res.user;
        dispatch(setUser(user));
        await updateProfile(user, {
          displayName: values.name,
        });
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
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
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
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <div>
          <b className="error">{errorMsg}</b>
        </div>
        <div className="register-footer">
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Register
          </button>
          <Link className="link" to="/">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
