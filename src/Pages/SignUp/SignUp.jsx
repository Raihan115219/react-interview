import React from "react";
import { useForm } from "react-hook-form";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   login form fucnotns
  const onSubmit = (data) => {
    // backend will recive it
    // fetch("https://example.com/profile", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    console.log(data);
    //by above comments code you can share this info in backend
  };

  return (
    <div>
      <div className="login-form">
        <div className="title">
          <h2>Sign Up</h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form_group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form_group">
            <label for="email">Password</label>
            <input
              type="password"
              name="email"
              placeholder="Enter your email"
              {...register("password", { required: true })}
            />
          </div>
          <div className="form_group">
            <button type="submit">login</button>
          </div>
        </form>
        <div className="login-footer">
          <p>
            Already have an account? <Link to="/login">Signup</Link>
          </p>
          <div className="login-social">
            <p>OR</p>
            <div className="social">
              <div className="facebook">
                <BsFacebook className="socialIcon" />
              </div>
              <div className="google">
                <FcGoogle className="socialIcon" />
              </div>
              <div className="instagram">
                <BsInstagram className="socialIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
