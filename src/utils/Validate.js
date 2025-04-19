export const checkValidate = (email, password) =>{
    // const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name)
    const isEmailIdValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if(!isNameValid) return "Please enter name"
    if(!isEmailIdValid) return "Please Enter correct Email id";
    if(!passwordValid) return "Please Enter correct Password";

    return null;

}