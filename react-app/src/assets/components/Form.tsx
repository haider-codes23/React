import React, { FormEvent, useRef} from 'react';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: '',
    age: 0,
  }

  const handleSubmission = (event: FormEvent) => {
    event.preventDefault();
    // console.log('Submitted')
    if (nameRef.current !== null && ageRef.current !== null) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      console.log(person);
    };
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input ref={nameRef} id='name' className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id='age' type="number" className="form-control" />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
}

export default Form;