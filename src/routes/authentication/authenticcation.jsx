import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.jsx";
import SignUpForm from "../../components/sign-up-form/sign-up-form.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase.jsx"; // Import auth from firebase
import Button from "../../components/button/button.component.jsx";

import "./auth.styles.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      console.log(response);

      // You can redirect or do anything else you want here
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/invalid-credential") {
        alert("Wrong Email or Password");
      }
    }
  };

  console.log(error);

  return (
    <div className="auth-container">
      <div className="specific">
        <div className="sign-in-container">
          <h1>Sign in Page</h1>
          <form onSubmit={handleSignIn}>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            <Button type="button" buttonType="google" onClick={logGoogleUser}>
              Sign in with Google
            </Button>
          </form>
        </div>
      </div>
      <div className="specific">
        <SignUpForm />
      </div>
    </div>
  );
}
