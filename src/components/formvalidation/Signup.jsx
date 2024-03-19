import React, { useState } from "react";
import "./sign.css";

const countries = [
  { name: "Afghanistan" },
  { name: "Albania" },
  { name: "Algeria" },
  { name: "India" },
];
const Signup = () => {
    
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile: "",
        email:"",
        password:"",
        confirmpassword: "",
        country:""
      });
      const [errors, setErrors] = useState({});
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        const name_pattern = /[\D]/;
        const mobile_pattern=/^\d{10}$/
        const email_pattern=/[a-z0-9]{1,20}@[a-z0-9]{1,10}\.[a-z]{2,}/
        const password_pattern=/^.{8,}$/;

        if (!formData.firstname.trim()) {
            validationErrors.firstname = "First Name is required";
          }
          else if(!name_pattern.test(formData.firstname)){
            validationErrors.firstname="First Name is not validate"
          }
          if(!formData.lastname.trim()){
            validationErrors.lastname="Last Name is requird";
          }
    
          else if(!name_pattern.test(formData.lastname)){
            validationErrors.lastname="Last Name is not validate"
          }
          if(!formData.mobile.trim()){
            validationErrors.mobile="Mobile Number is requird";
          }
          else if(!mobile_pattern.test(formData.mobile)){
            validationErrors.mobile="Mobile number is not validate only 10 dight number Allow"
          }
          if (!formData.email.trim()) {
            validationErrors.email = "Email is rquired";
          } else if (!email_pattern.test(formData.email)) {
            validationErrors.email = "Email is not validate";
          }
          if (!formData.password.trim()) {
            validationErrors.password = "password is required";
          } else if (!password_pattern.test(formData.password)) {
            validationErrors.password = "Password should be at least 8 character long";
          }
          if (formData.confirmpassword !== formData.password) {
            validationErrors.confirmpassword = "Password is Not Matched";
          }
          if (!formData.country.trim()) {
            validationErrors.country = "Please Select The Country";
          }
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            window.location ="/login";
          }

    }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="heading">Sign Up</h1>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          className="input"
          onChange={handleChange}
        />
      </div>
      {errors.firstname && <span>{errors.firstname}</span>}
      
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="input"
          onChange={handleChange}
        />
      </div>
      {errors.lastname && <span>{errors.lastname}</span>}
      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          className="input"
          onChange={handleChange}
        />
      </div>
      {errors.mobile && <span>{errors.mobile}</span>}
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="E-Mail"
          className="input"
          onChange={handleChange}
        />
      </div>
      {errors.email && <span>{errors.email}</span>}
      <div>
        <label>Password:</label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          className="input"
          onChange={handleChange}
        />
      </div>
      {errors.password && <span>{errors.password}</span>}
      <div>
        <label>Confirm Password:</label>
        <input
          type="text"
          name="confirmpassword"
          placeholder="Confirm Password"
          className="input"
          onChange={handleChange}
        />
      </div>
      {errors.confirmpassword && <span>{errors.confirmpassword}</span>}

      <div>
        <label>Country:</label>
        <select
          name="country"
          className="input"
          placeholder="Choose the country"
          onChange={handleChange}
        >
          <option value="">Choose the country</option>
          {countries.map((country) => (
            <option value={country.name}>{country.name}</option>
          ))}
        </select>
      </div>
      {errors.country && <span>{errors.country}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup
