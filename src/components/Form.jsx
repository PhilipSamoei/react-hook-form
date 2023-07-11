import React from 'react'
import  '../css/App.css'
import { useForm } from 'react-hook-form'


const form = useForm();
const { register} = form;

function Form() {
  return (
    <div>
        <form>
            <label htmlFor="username" >Username</label>
            <input type="text"  id="username" {...register("username")} />

            <label htmlFor="email" >Email</label>
            <input type="email"  id="email" {...register("email")}/>

            <label htmlFor="channel" >Channel</label>
            <input type="channel"  id="channel"{...register("channel")} />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form

