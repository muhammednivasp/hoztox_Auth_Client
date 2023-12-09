import * as Yup from 'yup'

export const registerValidation = Yup.object({
    username: Yup.string().min(3).required("Please Enter User-Name"),
    email: Yup.string().email("Please Enter Valid E-Mail").required("Please Enter Email").matches(/^\S*$/, "Should not contain spaces"),
    password: Yup.string().min(5, "Atleast 5 Charactor Long").required("Please Enter Password").matches(/[A-Z]/, "Include One Uppercase letter").matches(/^\S*$/, "Should not contain spaces"),
    cPassword: Yup.string().oneOf([Yup.ref('password')], "Password Not Matched")
})