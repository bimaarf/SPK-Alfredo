import React, { useState } from "react";
import headerImage from "../../Images/bg.png";
import untanImage from "../../Images/untan.png";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import "../../App.css";
import axios from "axios";
import { toast } from "react-toastify";
export const Login = ({ setAuthCheck }) => {
  const navRedirect = useNavigate();
  const [loadSubmit, setLoadSubmit] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    error_list: [],
  });
  const [emailValidator, setEmailValidator] = useState("");
  const validateEmail = (e) => {
    const email = e.target.value;
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
    if (validator.isEmail(email)) {
      e.persist();
      setEmailValidator("Email is valid!");
    } else {
      e.persist();
      setEmailValidator("Enter valid email!");
    }
  };
  const handleChange = (e) => {
    e.persist();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const setCookie = (cname, cvalue, minutes) => {
    var d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    // d.setTime(d.getTime() + (minutes*1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  };
  const handleSubmit = async (e) => {
    setLoadSubmit(true);
    e.preventDefault();
    const data = {
      email: formInput.email,
      password: formInput.password,
    };

    await axios.get("sanctum/csrf-cookie").then((res) => {
      axios.post(`api/login`, data).then((res) => {
        if (res.data.status === 202)
          return toast.error("Masukkan data dengan benar");
        if (res.data.status === 101)
          return toast.warning("Password anda salah");
        if (res.data.status === 102) return toast.error("Akun belum terdaftar");
        toast.success("Berhasil Login");
        setCookie("auth_token", res.data.token, 30);
        localStorage.setItem("auth_token", res.data.token);
        setAuthCheck(true);
        navRedirect("/decision-maker/dashboard");
      });
      setLoadSubmit(false);
    });
  };
  return (
    <>
      <div
        className="header-img"
        style={{
          backgroundImage: `url(${headerImage})`,
        }}
      >
        <div className="lg:container-lg lg:mx-auto flex justify-center items-center mx-2">
          <div className="pt-10">
            <div className="flex justify-center drop-shadow-lg shadow-black">
              <img src={untanImage} width={200} />
            </div>
            <h1 className="text-center font-bold text-3xl md:text-6xl text-white drop-shadow-lg shadow-black">
              SPK BIDIKMISI UNTAN
            </h1>
            <div className="bg-white rounded-3xl p-10 shadow-md mt-10 space-y-6">
              <h1 className="text-center text-yellow-500 font-bold md:text-4xl text-2xl">
                Login
              </h1>
              <form>
                <div className="mt-2">
                  <label
                    htmlFor="email"
                    className="text-gray-700 font-semibold"
                  >
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={validateEmail}
                    value={handleChange.email}
                    className={`${
                      emailValidator === "" &&
                      emailValidator !== "Enter valid email!"
                        ? "focus:border-yellow-500 "
                        : "" || emailValidator === "Enter valid email!"
                        ? "bg-red-50 border border-red-400 "
                        : "focus:border-yellow-500"
                    } xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none  focus:border border`}
                    placeholder="Masukkan alamat email"
                    required
                  />
                  <span
                    className={`${
                      emailValidator === "" &&
                      emailValidator !== "Enter valid email!"
                        ? ""
                        : "" || emailValidator === "Enter valid email!"
                        ? "text-red-500"
                        : "text-zinc-500"
                    } text-sm ml-1`}
                  >
                    {emailValidator === "" &&
                    emailValidator !== "Enter valid email!"
                      ? ""
                      : "" || emailValidator === "Enter valid email!"
                      ? "Email tidak valid!"
                      : ""}
                  </span>
                </div>
                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="text-gray-700 font-semibold"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={handleChange.password}
                    className=" xappearance-none rounded w-full py-3 px-3 text-gray-700 focus:outline-none focus:border-yellow-500 focus:border border"
                    placeholder="Masukkan password"
                    required
                  />
                </div>
                <div className="mt-10 text-center">
                  <button
                    disabled={loadSubmit ? true : false}
                    type="submit"
                    onClick={handleSubmit}
                    className={`${
                      loadSubmit && "px-32"
                    } bg-yellow-500 hover:bg-yellow-600 px-28 hover:px-32 hover:rounded-xl py-2 rounded-md text-xl font-semibold text-white duration-300 ease-in-out`}
                  >
                    {loadSubmit && (
                      <svg
                        role="status"
                        className="inline w-3 h-3 mr-1 text-white animate-spin mb-0.5"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                    Login
                  </button>
                  <div className="text-sm mt-2 text-gray-500">
                    <span>Belum punya akun?</span>
                    <Link className="text-orange-500 italic" to="/register">
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
