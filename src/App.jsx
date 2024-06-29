import React, { useState } from 'react'
import './App.css'
function App() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: 'India',
  });

  const [errors, setErrors] = useState({});

  // Custom hook for validating email format
  const useEmailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Custom hook for validating user name length
  const useUserNameValidation = (userName) => {
    return userName.length <= 4;
  };

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to validate form data on submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!useEmailValidation(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!useUserNameValidation(formData.firstName)) {
      newErrors.firstName = 'User name should be less than or equal to 4 characters';
    }

    if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // If no errors, submit form data (replace with your actual submission logic)
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    }

    event.target.reset();
  };

  return (
    <>
      <section>
        <div className="container">
          <h2 className=' text-center'>User Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className=' form-control w-100'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    className=' form-control w-100'
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="retypePassword">Retype Password *</label>
                  <input
                    type="password"
                    id="retypePassword"
                    className=' form-control w-100'
                    name="retypePassword"
                    value={formData.retypePassword}
                    onChange={handleChange}
                  />
                  {errors.retypePassword && <span className="error">{errors.retypePassword}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    className=' form-control w-100'
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    className=' form-control w-100'
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input
                    type="tel"
                    max="10"
                    id="phoneNumber"
                    className=' form-control w-100'
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    className=' form-control w-100'
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="town">Town *</label>
                  <input
                    type="text"
                    id="town"
                    className=' form-control w-100'
                    name="town"
                    value={formData.town}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="region">Region *</label>
                  <input
                    type="text"
                    id="region"
                    className=' form-control w-100'
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="postcode">Postcode *</label>
                  <input
                    type="text"
                    id="postcode"
                    className=' form-control w-100'
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className=' input-group flex-column my-3 '>
                  <label htmlFor="country">Country *</label>
                  <input
                    type="text"
                    id="country"
                    className=' form-control w-100'
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                  <div className=' pt-4'>
                  <input type="submit" value="Submit" className=' btn btn-success form-control py-2'/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
export default App