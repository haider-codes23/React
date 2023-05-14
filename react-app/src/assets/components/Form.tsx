import React, { FormEvent, useRef, useState} from 'react';
import { useForm } from 'react-hook-form';

// Accessing the input fields using State Hooks
const Form = () => {
  // const form = useForm();
  const {register, handleSubmit, formState: {errors}} = useForm();
  console.log(register('name'));
  
  // const handleSubmission = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id='name' {...register('name', {required: true,  minLength: 3})} className="form-control"></input>
        {errors.name?.type === 'required' && <p>The name field is required!</p>}
        {errors.name?.type === 'minLength' && <p>The name must be atleast 3 charcters</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id='age' {...register("age")} type="number" className="form-control" />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
}

export default Form;





// Accessing Input field using Ref Hook and then storing those values in an object for send to the server
// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = {
//     name: '',
//     age: 0,
//   }

//   const handleSubmission = (event: FormEvent) => {
//     event.preventDefault();
//     // console.log('Submitted')
//     if (nameRef.current !== null && ageRef.current !== null) {
//       person.name = nameRef.current.value;
//       person.age = parseInt(ageRef.current.value);
//       console.log(person);
//     };
//   };

//   return (
//     <form onSubmit={handleSubmission}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input ref={nameRef} id='name' className="form-control"></input>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">Age</label>
//         <input ref={ageRef} id='age' type="number" className="form-control" />
//       </div>
//       <button className='btn btn-primary'>Submit</button>
//     </form>
//   );
// }

// export default Form;