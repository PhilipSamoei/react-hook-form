import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/App.css';
import { DevTool } from '@hookform/devtools';



function Form() {
  const form = useForm();
  const { register, control, handleSubmit,formState } = form;
  const {errors} = formState;

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    alert('Form submitted');
    form.reset();

  };

  return (
    <div className='formname'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('username',{
          required:{
            value:true,
            message:" Username must be provided",
        },
      })}
        />
        <p className='error'>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email',
        {
          required:{
            value:true,
            message:" email must be valid",
        },
      })}
        />

       
        <p className='error'>{errors.email?.message}</p>
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register('channel',
        {
          required:{
            value:true,
            message:" Channel must be provided",
        },
      })}
        />


        <p className='error'>{errors.channel?.message}</p>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form;
