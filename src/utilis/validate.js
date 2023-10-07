export const checkValidData = (email,password,name) =>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const IsNameValid = /^[A-Za-z\s]{1,30}$/.test(name);

    if(!isEmailValid) return "Email ID is not Valid"
    if(!isPasswordValid) return "Password is not Valid"
    if(!IsNameValid) return "Name is not Valid"

    return null;
};