import React, { useState, useRef } from "react";

import "./error.css";
import Input from "./Input";
import { validateForm } from "./validateForm";




const Form = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        Phone_No: "",
        country: "",
        city: "",
        PAN_no: "",
        Aadhar_no: "",
    });
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (formData[name]) {
            formRef.current[name].classList.remove("error");
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isError = validateForm(formData, formRef, setErrors);

        // if isError is false, perform form submission here

        if (!isError) {
            setSuccess(true);
        }
    };

    return (
        <div className="mx-auto mt-10 w-[25rem]">
            <h1 className="text-center font-bold text-xl">
                Assignment 1 - Form validation
            </h1>

            {success ? (
                <p className="text-[green] text-center mt-4 font-bold">
                    Successfully submitted.
                </p>
            ) : (
                <div className="shadow-md border p-4 mt-4">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <Input
                            errors={errors}
                            label="First Name"
                            name="First_Name"
                            onChange={handleChange}
                            placeholder="First Name..."
                            type="text"
                            value={formData.First_Name}
                        />
                        <Input
                            errors={errors}
                            label="Last Name"
                            name="Last_Name"
                            onChange={handleChange}
                            placeholder="Last Name..."
                            type="text"
                            value={formData.Last_Name}
                        />
                        <Input
                            errors={errors}
                            label="Username"
                            name="username"
                            onChange={handleChange}
                            placeholder="Username..."
                            type="text"
                            value={formData.username}
                        />
                        <Input
                            errors={errors}
                            label="Email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email..."
                            value={formData.email}
                        // type="text"
                        />
                        <Input
                            errors={errors}
                            label="Password"
                            name="password"
                            onChange={handleChange}
                            placeholder="Password..."
                            type="password"
                            value={formData.password}
                        />
                        <Input
                            errors={errors}
                            label="Confirm password"
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Confirm password..."
                            type="password"
                            value={formData.confirmPassword}
                        />
                        <Input
                            errors={errors}
                            label="Phone No."
                            name="Phone_No"
                            onChange={handleChange}
                            placeholder="Phone No...."
                            type="number"
                            value={formData.Phone_No}
                        />
                        <Input
                            errors={errors}
                            label="Country"
                            name="Country"
                            onChange={handleChange}
                            placeholder="Country...."
                            type="text"
                            value={formData.Country}
                        />
                        <Input
                            errors={errors}
                            label="City"
                            name="City"
                            onChange={handleChange}
                            placeholder="City...."
                            type="text"
                            value={formData.City}
                        />
                        <Input
                            errors={errors}
                            label="PAN No."
                            name="PANno"
                            onChange={handleChange}
                            placeholder="PAN no...."
                            type="number"
                            value={formData.PANno}
                        />
                        <Input
                            errors={errors}
                            label="Aadhar No."
                            name="Aadharno"
                            onChange={handleChange}
                            placeholder="Aadhar no...."
                            type="number"
                            value={formData.Aadharno}
                        />



                        <button className="w-full bg-cyan-500 text-white p-2">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Form;

