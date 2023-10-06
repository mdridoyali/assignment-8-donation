import { Link } from "react-router-dom";



const Login = () => {






  return (
    <div className="hero h-[100vh] bg-base-200">
      <div className="">
      
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>Don not have an account <Link to={'/register'} className="text-blue-600 font-semibold underline " >Register</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
