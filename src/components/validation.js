function validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === ""){
        error.name = "Name Should not be empty"
    }
    if(values.phone.length === [ ] ){
        error.phone = "Phone number should not be blank"
    }
    if(values.phone[0].length < 8 ){
        error.phone = "Phone number should be at least 8 characters with 1 Uppercase , 1 specialsymbol , 1 number"
    }
    if(values.email === ""){
        error.email = "Email Should not be Empty"
    }

    if(!email_pattern.test(values.email)){
        error.email = "Email is empty or invalid"
    }
    if(values.confirmPassword[0] === "" || values.confirmPassword[0] !== values.password[0]){
        error.confirmPassword = "password not matched"
    }

    return error;

}

export default validation