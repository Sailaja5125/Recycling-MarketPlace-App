import { useState } from 'react';
import { appwriteService } from '../Appwrite/app_write';
import image from "./images/recycle5.png";
import Alert from './Alert';
import useAuth from '../context/useAuth';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { setAuthStatus } = useAuth();
  const [isSubmitted, setSubmitted] = useState(false);
  const [isError, setError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await appwriteService.loginUserAccount(formData);
      console.log("User logged in successfully:", userData);
      setSubmitted(true);
      navigate("/main");
      if (userData) {
        setAuthStatus(true);
      }
    } catch (error) {
      console.log("Couldn't send data to Appwrite:", error);
      setError(true);
      navigate("/main")
    }
    console.log(formData);
    console.log(isSubmitted , isError)
  };

  return (
    <>
      {isSubmitted && <Alert text="successfully logged in "/>}
      {isError && <Alert text="Could'nt login"/>}
      <div className='flex'>
        <img src={image} alt="image" className='w-1/2' />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-4"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={formData.password}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-4"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Go to {' '}
              <Link href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Home
              </Link>
            </p>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Do not have an account ?{' '}
              <Link href="/example" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Create an account 
              </Link>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
