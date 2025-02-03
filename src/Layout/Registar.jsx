import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProviders";

const Registar = () => {
  const { createuser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegistar = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    createuser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">
      <form onSubmit={handleRegistar} className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
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
          <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
        </fieldset>
      </form>
      <p className="text-center pb-6">
        Already have an Account?
        <Link to="/login" className="text-green-600 font-bold ml-4">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registar;
