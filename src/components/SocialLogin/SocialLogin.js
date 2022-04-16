import React from "react";
import "./SocialLogin.css";
import googleIcon from "../../images/social/google.png";
import github from "../../images/social/github.png";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  return (
    <div className="my-3">
      <div className="d-flex align-items-center">
        <div
          style={{ borderBottom: "1px solid #b8b8b8" }}
          className="w-50"
        ></div>
        <div>
          <p style={{ color: "#7a7a7a" }} className="px-2 mt-2">
            or
          </p>
        </div>
        <div
          style={{ borderBottom: "1px solid #b8b8b8" }}
          className="w-50"
        ></div>
      </div>
      <div>
        <button onClick={() => signInWithGoogle()} className="googleBtn my-2">
          <img src={googleIcon} alt="" />
          <span className="px-2">Sign In With Google</span>
        </button>
        <button onClick={() => signInWithGithub()} className="googleBtn my-2">
          <img src={github} alt="" />
          <span className="px-2">Sign In With Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
