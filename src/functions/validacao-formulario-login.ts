import { useState } from 'react'

// const PostContactForm = async (
//   values: any,
//   successCallback: any,
//   errorCallback: any
// ) => {
//   // do stuff
//   // if successful
//   if (true) successCallback()
//   else {
//   }
// }

// const initialFormValues = {
//   fullName: '',
//   email: '',
//   password: '',
//   message: '',
//   formSubmitted: false,
//   success: false
// }

// export const useFormControls = () => {
//   const [values, setValues] = useState(initialFormValues)
//   const [errors, setErrors] = useState({} as any)

//   const validate: any = (fieldValues = values) => {
//     let temp: any = { ...errors }

//     if ('fullName' in fieldValues)
//       temp.fullName = fieldValues.fullName ? '' : 'This field is required.'

//     if ('password' in fieldValues)
//       temp.fullName = fieldValues.password ? '' : 'This field is required.'

//     if ('email' in fieldValues) {
//       temp.email = fieldValues.email ? '' : 'This field is required.'
//       if (fieldValues.email)
//         temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
//           ? ''
//           : 'Email is not valid.'
//     }

//     if ('message' in fieldValues)
//       temp.message =
//         fieldValues.message.length !== 0 ? '' : 'This field is required.'

//     setErrors({
//       ...temp
//     })
//   }

//   const handleInputValue = (e: any) => {
//     const { name, value } = e.target
//     setValues({
//       ...values,
//       [name]: value
//     })
//     validate({ [name]: value })
//   }

//   const handleSuccess = () => {
//     setValues({
//       ...initialFormValues,
//       formSubmitted: true,
//       success: true
//     })
//   }

//   const handleError = () => {
//     setValues({
//       ...initialFormValues,
//       formSubmitted: true,
//       success: false
//     })
//   }

//   const formIsValid = (fieldValues = values) => {
//     const isValid =
//       fieldValues.password &&
//       fieldValues.email &&
//       fieldValues.message &&
//       Object.values(errors).every(x => x === '')

//     return isValid
//   }

//   const handleFormSubmit = async (e: any) => {
//     e.preventDefault()
//     const isValid = Object.values(errors).every(x => x === '') && formIsValid()
//     if (isValid) {
//       await PostContactForm(values, handleSuccess, handleError)
//     }
//   }

//   return {
//     values,
//     errors,
//     handleInputValue,
//     handleFormSubmit,
//     formIsValid
//   }
// }
