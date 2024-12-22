import React from "react";
import { appwriteService } from "../../Appwrite/app_write";
import img from "../images/recyclelogo.png";
import img2 from "../images/recycling12.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function MainPage({rewards}) {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const getUser = async () => {
    const user = await appwriteService.getCurrentUser();
    if (user) {
      // console.log(user)
      // console.log(user.name)
      setUser(user);
    } else {
      console.log("Could'nt get an user ");
    }
  };
  
  React.useEffect(() => {
    getUser();
  }, []);

const Logout = async(evt)=>{
  try {
    const response = await appwriteService.logout();
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div>
      {/* this is Main MainPage {user ? user.name : "sandy"} */}
      {/* Navbar */}
      <nav className="flex justify-between  m-4 items-center">
        <div>
          <img src={img} alt="Logo" className="w-24 h-24" />
        </div>
        <div className="flex justify-evenly gap-8 items-center">
          <a href="#" className="text-gray-500 mr-4 text-xl font-semibold">
            Home
          </a>
          <a href="/product" className="text-gray-500 mr-4 text-xl font-semibold">
            Products
          </a>
          <a href="#" className="text-gray-500 mr-4 text-xl font-semibold">
            About us
          </a>
          <a href="#" className="text-gray-500 mr-4 text-xl font-semibold">
            Contact us
          </a>
          <button className="w-44 h-14 bg-c1 m-0 text-center font-semibold rounded-lg  text-white text-xl" onClick={Logout}>
            Logout
          </button>
        </div>
      </nav>
      {/* main */}
      <div className="h-screen w-screen">
        <nav className="flex justify-end mr-12 items-start">
          <div className="flex justify-evenly w-44">
            <h1 className="text-center font-bold text-gray-400">Rewards</h1>
            <div className="flex gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/128/17301/17301413.png"
                alt="points"
                className="h-5 w-5"
              />
              <h1 className="text-center font-bold text-gray-400">{rewards?rewards:"0"}</h1>
            </div>
          </div>
        </nav>
        <div className="hero flex">
          <div className="content absolute left-16 z-20 text-center">
            <h1 className="text-6xl  text-c1 font-bold ">
              Hey ,{user ? user.name : "Sandy"}
            </h1>
            <div className="icons flex gap-16 m-5 p-5">
              <div className="w-32">
                <div className="w-full flex justify-center items-center">
                  <div className="h-20 w-20 rounded-full bg-cyan-100 flex justify-center items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/994/994393.png"
                      alt="sell"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h1 className="text-pretty text-center text-c3 font-medium">
                  Sell us Recyclable Materials
                </h1>
              </div>

              <div className="w-32">
                <div className="w-full flex justify-center items-center">
                  <div className="h-20 w-20 rounded-full bg-cyan-100 flex justify-center items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/17301/17301413.png"
                      alt="rewards"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h1 className="text-pretty text-center text-c3 font-medium">
                  Earn Rewards
                </h1>
              </div>

              <div className="w-32">
                <div className="w-full flex justify-center items-center">
                  <div className="h-20 w-20 rounded-full bg-cyan-100 flex justify-center items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/6158/6158412.png"
                      alt="buy"
                      className="h-14 w-14"
                    />
                  </div>
                </div>
                <h1 className="text-pretty text-center text-c3 font-medium">
                  Buy our items with our rewards
                </h1>
              </div>
            </div>
            <Link to="/sell" className="w-44 h-14 border-4 border-c1 rounded-full text-c1 font-medium p-4">
              Sell Materials
            </Link>
          </div>
          <img src={img2} alt="hero section" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
