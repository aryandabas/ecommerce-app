import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");


  const onSubmitHandler = async (event) => {
      event.preventDefault();
      //prevent reloading page 
  }

  return (
    <form onSubmit={onSubmitHandler}
      action=""
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Sign Up" ? (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          required
        />
      ) : (
        ""
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer">Forget your Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            {" "}
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            {" "}
            Log-In Here{" "}
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-20 py-2 rounded-2xl">
        {currentState === "Login" ? "Sign In" : "Sign Up "}
      </button>
    </form>
  );
};

export default Login;
