import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google sign in Successfully", result.user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="fieldset-label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
        </fieldset>
      </form>
      <p className="text-center pb-6">
        Create a new Account ?
        <Link to="/registar" className="text-green-600 font-bold ml-4">
          Sign Up
        </Link>
      </p>
      <p onClick={handleGoogleSignIn} className="btn btn-ghost">
        Google
      </p>
    </div>
  );
};

export default Login;
