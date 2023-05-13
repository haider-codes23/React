import React, { FormEvent } from 'react';

const Form = () => {
  const handleSubmission = (event: FormEvent) => {
    event.preventDefault();
    console.log('Submitted')
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id='name' className="form-control"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id='age' type="number" className="form-control" />
      </div>
      <button className='btn btn-primary'>Submit</button>
    </form>
  );
}

export default Form;