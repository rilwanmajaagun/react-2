import React from 'react'
 import {useForm} from 'react-hook-form'


const Form3 = () => {
    const {register, handleSubmit, errors}=useForm()
const onSubmit = (data)=>{
    console.log(data)
}
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
         <input type='text' placeholder ='Email' name='Email' ref={register}/>
         {/* method 1 */}
         {/* <input type='password' placeholder='password' name='password' ref={register({required:true, minLength:6})}/>   */}
              {/* {errors.password && <p>password is invalid</p>} */}
              {/* method 2 */}
         <input type='password' placeholder='password' name='password' ref={register({required:"PASSWORD IS REQUIRED", minLength:{value:8, message:"Too short"}})}/>  
        {errors.password && errors.password.message}
         <button type="submit">submit</button>
        </form>
    )
}

export default Form3
