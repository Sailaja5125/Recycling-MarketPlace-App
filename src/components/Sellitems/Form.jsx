import React, { useEffect, useState } from 'react';
import { appwriteService } from '../../Appwrite/app_write';
import { useNavigate } from 'react-router-dom';
function Form() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
        mobilenumber: "",
        address: "",
        materials: [],
    });
    
    // now the input given is stored 
    const [formData, setFormData] = useState({
        phone: '',
        address: '',
        materials: []
    });
   // fetching input from getCurrentUser 
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: ""
    });
 // fetching the user from getCurrentUser
    const addDetails = async () => {
        const user = await appwriteService.getCurrentUser();
        if (user) {
            setUserDetails({
                username: user.name,
                email: user.email
            });
        }
    };
// calling the function
    useEffect(() => {
        addDetails();
    }, []);
// setting the total data in form
    useEffect(() => {
        setForm({
            username: userDetails.username,
            email: userDetails.email,
            mobilenumber: formData.phone,
            address: formData.address,
            materials: formData.materials,
        });
    }, [userDetails, formData]);
// sending the request to the backend 
    const sendRequest = async () => {
        try {
            const url = "http://localhost:8800/api/user/createUser";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value, options } = e.target;
        // for materials
        if (name === "materials") {
            const selectedMaterials = Array.from(options)
                .filter(option => option.selected)
                .map(option => option.value);
            setFormData(prevData => ({
                ...prevData,
                [name]: [...new Set([...prevData[name], ...selectedMaterials])]
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleRemoveMaterial = (material) => {
        setFormData(prevData => ({
            ...prevData,
            materials: prevData.materials.filter(item => item !== material)
        }));
    };
   const sendMail = async()=>{
    try {
        const url="http://localhost:8800/api/user/otp"
        const response = await fetch(url , {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "email":form.email
            }
        })
        const data = await response.json();
        console.log("Successfully sent the email",data);
    } catch (error) {
        console.log(error)
    }
   }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Details:", userDetails);
        console.log("Form Data:", formData);
        console.log(form);
        sendRequest();
        sendMail();
        navigate("/otp")
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form method="POST" action="#" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                                Address
                            </label>
                            <div className="mt-1">
                                <input
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="materials">
                                Materials
                            </label>
                            <div className="mt-1">
                                <select
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                    name="materials"
                                    id="materials"
                                    multiple
                                    value={formData.materials}
                                    onChange={handleChange}
                                >
                                    <option value="glass">Glass</option>
                                    <option value="plastic">Plastic</option>
                                    <option value="metals">Metals</option>
                                    <option value="paper">Paper</option>
                                    <option value="clothes">Clothes</option>
                                    <option value="electronics">Electronics</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-4">
                            {formData.materials.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Selected Materials:</label>
                                    <div className="flex flex-wrap mt-2">
                                        {formData.materials.map(material => (
                                            <div key={material} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 m-1 flex items-center">
                                                <span>{material}</span>
                                                <button
                                                    type="button"
                                                    className="ml-2 text-gray-500 hover:text-gray-700"
                                                    onClick={() => handleRemoveMaterial(material)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-6">
                            <button
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit"
                            >
                                Book Pickup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;