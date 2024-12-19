import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressSteps from "./ProgressStep";
import SubSection from "./SubSection";
import { useDispatch, useSelector } from "react-redux";
import { setUser, resetData } from "../slices/PatientSlice";
import {persistor} from "../store/store"

const PatientDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  console.log('user: ', user);



  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    dob: "",
    email: "",
    age: "",
    gender: "",
    state: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        ...user, // Merge user data into formData
      }));
    }
  }, [user]);
  const handleNext = () => {
    console.log("1");

    if (validateForm()) {
      console.log("2");
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        navigate("/assign-resources");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleSaveAndContinue = (step) => {
    if (validateForm() || step === 1) {
      dispatch(setUser(formData))
      // saveToLocalStorage();
      handleNext();
      console.log("3");
    }
  };

  const handleSaveAndSubmit = () => {
    if (validateForm()) {
      dispatch(resetData());
    
      // Clear the persisted state
      persistor.purge().then(() => {
        console.log('Persisted state cleared!');
      });
  
      saveToLocalStorage();
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First Name is required";
    if (!formData.lastName) formErrors.lastName = "Last Name is required";
    if (!formData.mobile) formErrors.mobile = "Mobile Number is required";
    if (!formData.dob) formErrors.dob = "DOB is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.age) formErrors.age = "Age is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return (
    <div className="bg-[#F4F2F0]">
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register a new patient
        </h2>

        <div className="flex justify-center mb-8">

          <div className="flex justify-center mb-8">
            <ProgressSteps currentStep={currentStep} />
          </div>


        </div>

        {/* Form Section */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200">

          <SubSection />

          <form className="space-y-6">
            {currentStep === 1 && (
              <>
                <h2 className="font-bold text-xl">Patient Details</h2>

                <div className="grid grid-cols-4 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name*
                    </label>
                    <div className="flex">
                      <select className="border border-gray-400  bg-white px-3 py-2 rounded-l-md">
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Dr.</option>
                      </select>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        className="border border-gray-400 rounded-r-md w-full px-3 py-2"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name*
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        name="lastName"
                        className="border border-gray-400 rounded-md w-full px-3 py-2"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Mobile No.*
                    </label>
                    <div className="flex">
                      <span className="border border-gray-400  bg-white px-3 py-2 rounded-l-md">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Enter"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        name="mobile"
                        className="border border-gray-400 rounded-r-md w-full px-3 py-2"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.mobile && (
                      <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Alternate Mobile No.
                    </label>
                    <div className="flex">
                      <span className="border border-gray-400  bg-white px-3 py-2 rounded-l-md">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="Enter"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        name="mobile2"
                        className="border border-gray-400 rounded-r-md w-full px-3 py-2"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Enter"
                        className="border border-gray-400 rounded-md w-full px-3 py-2"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Date of Birth
                    </label>
                    <div className="flex">
                      <input
                        type="date"
                        name="dob"
                        className="border border-gray-400 rounded-md w-full px-3 py-2"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.dob && (
                      <p className="text-red-500 text-sm mt-1">{errors.dob}</p>
                    )}
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Age*</label>
                    <div className="flex">
                      <input
                        type="number"
                        placeholder="Enter (Number only)"
                        className="border border-gray-400 rounded-md w-full px-3 py-2"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {errors.age && (
                      <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                    )}
                  </div>

                  {/* Birth Time */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Birth Time
                    </label>
                    <input
                      type="time"
                      className="border border-gray-400 rounded-md w-full px-3 py-2"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Gender*
                    </label>
                    <div className="flex items-center space-x-4 mt-1">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          required
                          className="mr-1"
                        />
                        Male
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          required
                          className="mr-1"
                        />
                        Female
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          required
                          className="mr-1"
                        />
                        Others
                      </label>
                    </div>
                  </div>

                  {/* Guardian Name */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Guardian Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="border border-gray-400 rounded-md w-full px-3 py-2"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Country
                    </label>
                    <select className="border border-gray-400  bg-white rounded-md w-full px-3 py-2">
                      <option>India</option>

                    </select>
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium mb-1">State</label>
                    <select
                      className="border border-gray-400  bg-white rounded-md w-full px-3 py-2"
                      required
                    >
                      <option value="" disabled selected>
                        Select State
                      </option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      District
                    </label>
                    <input
                      type="text"
                      placeholder="Enter District"
                      className="border border-gray-400 rounded-md w-full px-3 py-2"
                    />
                  </div>

                  {/* City/Town */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City / Town
                    </label>
                    <input
                      type="text"
                      placeholder="Enter City/Town"
                      className="border border-gray-400 rounded-md w-full px-3 py-2"
                    />
                  </div>

                  {/* Full Address */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Full Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Full Address"
                      className="border border-gray-400 rounded-md w-full px-3 py-2"
                    />
                  </div>

                  {/* Reference: How do you know about us */}

                  <div className="col-span-4">
                    <h2 className="font-bold text-xl">Reference</h2>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      How do you know about us
                    </label>
                    <select className="border border-gray-400  bg-white rounded-md w-full px-3 py-2">
                      <option>Select</option>
                      <option>Friend</option>
                      <option>Advertisement</option>
                      <option>Online</option>
                    </select>
                  </div>

                  {/* Refer From */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Refer From
                    </label>
                    <select className="border border-gray-400  bg-white rounded-md w-full px-3 py-2">
                      <option>Select</option>
                      <option>Doctor</option>
                      <option>Family</option>
                      <option>Others</option>
                    </select>
                  </div>

                  {/* Admission Type */}
                  <div className="col-span-4">
                    <h2 className="font-bold text-xl">Admission Type</h2>
                  </div>

                  <div className="col-span-4">
                    {/* <label className="block text-sm font-medium mb-1">Admission Type</label> */}
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input type="radio" name="admission" className="mr-1" />{" "}
                        Voluntary
                      </label>
                      <label className="inline-flex items-center">
                        <input type="radio" name="admission" className="mr-1" />{" "}
                        Involuntary
                      </label>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <select className="border border-gray-400  bg-white rounded-md px-3 py-2">
                      <option>Brought by family</option>
                      <option>Brought by friends</option>
                      <option>Self</option>
                    </select>
                  </div>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <h2 className="font-bold text-xl">Assign Resources</h2>
                {/* Assign Resources fields */}
                <div className="grid grid-cols-4 gap-6">
                  {/* Assign Resource 1 */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Resource 1
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Resource 1"
                      className="border border-gray-300 rounded-md w-full px-3 py-2"
                    />
                  </div>
                  {/* Assign Resource 2 */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Resource 2
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Resource 2"
                      className="border border-gray-300 rounded-md w-full px-3 py-2"
                    />
                  </div>
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <h2 className="font-bold text-xl">Doctor Test Report</h2>
                {/* Doctor Test Report fields */}
                <div className="grid grid-cols-4 gap-6">
                  {/* Test Report 1 */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Test Report 1
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Test Report 1"
                      className="border border-gray-300 rounded-md w-full px-3 py-2"
                    />
                  </div>
                  {/* Test Report 2 */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Test Report 2
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Test Report 2"
                      className="border border-gray-300 rounded-md w-full px-3 py-2"
                    />
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-center mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  className=" border border-gray-500 text-[#323E2A] px-6 py-2 mr-3 rounded-full"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              <div className="flex space-x-4">
                <button
                  type="button"
                  className=" border border-gray-500 text-[#323E2A] px-6 py-2 rounded-full"
                  onClick={saveToLocalStorage}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-[#323E2A] text-white px-6 py-2 rounded-full"
                  onClick={
                    currentStep === 3 ? handleSaveAndSubmit : () => handleSaveAndContinue(currentStep)
                  }
                >
                  {currentStep === 3 ? "Save & Submit" : "Save & Continue"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;