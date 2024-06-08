export const validateForm = (formData, formRef, setErrors) => {
    let isError = true;


    if (!formData.First_Name.trim()) {
        formRef.current.First_Name.classList.add("error");
        setErrors({ First_Name: "First Name is required." });
        return isError;
    }
    if (!formData.Last_Name.trim()) {
        formRef.current.Last_Name.classList.add("error");
        setErrors({ Last_Name: "Last Name is required." });
        return isError;
    }
    if (!formData.username.trim()) {
        formRef.current.username.classList.add("error");
        setErrors({ username: "Username is required." });
        return isError;
    }

    if (!formData.email) {
        formRef.current.email.classList.add("error");
        setErrors({ email: "Email is required." });
        return isError;
    } else if (!isEmailValid(formData.email)) {
        formRef.current.email.classList.add("error");
        setErrors({ email: "Email is invalid." });
        return isError;
    }

    if (!formData.password.trim()) {
        formRef.current.password.classList.add("error");
        setErrors({ password: "Password is required." });
        return isError;
    } else if (formData.password.length < 6) {
        formRef.current.password.classList.add("error");
        setErrors({ password: "Password must be at least 6 characters long." });
        return isError;
    }

    if (!formData.confirmPassword.trim()) {
        formRef.current.confirmPassword.classList.add("error");
        setErrors({ confirmPassword: "Password is required." });
        return isError;
    } else if (formData.password !== formData.confirmPassword) {
        formRef.current.confirmPassword.classList.add("error");
        setErrors({ confirmPassword: "Password do not match." });
        return isError;
    }

    if (!formData.Phone_No.trim()) {
        formRef.current.Phone_No.classList.add("error");
        setErrors({ Phone_No: "Phone No. is required." });
        return isError;
    }

    if (!formData.Country.trim()) {
        formRef.current.Country.classList.add("error");
        setErrors({ Country: "Phone No. is required." });
        return isError;
    }

    if (!formData.City.trim()) {
        formRef.current.City.classList.add("error");
        setErrors({ City: "City is required." });
        return isError;
    }

    if (!formData.PANno.trim()) {
        formRef.current.PANno.classList.add("error");
        setErrors({ PANno: "PAN No. is required." });
        return isError;
    }

    if (!formData.Aadharno.trim()) {
        formRef.current.Aadharno.classList.add("error");
        setErrors({ Aadharno: "Aadhar Number is required." });
        return isError;
    }

    // if there is no error
    return (isError = false);
};

const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
};
