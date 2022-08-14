import React, {useState} from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess'

function Form() {
  const [isSubmitted, setIsSubmitting]= useState(false)

  function submitForm() {
    setIsSubmitting(true)
  }

  return (
    <div>
        {!isSubmitted ? <FormSignUp submitForm=
        {submitForm} /> : <FormSuccess />}
    </div>
  )
}

export default Form