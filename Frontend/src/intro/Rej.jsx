import React, { useState } from 'react'

const Rej = () => {
    const [form, setForm] = useState({Name: "", Email: "", Password: ""})

    const submit = ((e) => {
        e.preventDefault()
        alert("Registration Successful")
        //local storage
        localStorage.setItem('form', form.toString())
    }, [form]) 
  return (
    <div>
      <form onSubmit={submit}>
        <input type='text' placeholder='Enter your name'
         required onChange={(e) => setForm({...form, Name:e.target.value})} />,
        <input type='email' placeholder='Enter your email'
         required onChange={(e) => setForm({...form, Email:e.target.value})} />,
        <input type="password" placeholder='Enter your password'
         required onChange={(e) => setForm({...form, Password:e.target.value})} />
         <button>Register</button>
      </form>
        
    </div>
  )
}

export default Rej