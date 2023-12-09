import * as Yup from 'yup'

export const loginValidation = Yup.object({
    email: Yup.string().email("Please Enter Valid E-Mail").required("Please Enter Email").matches(/^\S*$/, "Should not contain spaces"),
    password: Yup.string().min(5, "Password Does'nt Match").required("Please Enter Password").matches(/[A-Z]/, "Password Does'nt Match").matches(/^\S*$/, "Password Does'nt Match")
})