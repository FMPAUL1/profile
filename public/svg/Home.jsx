
import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <div className="img">
<h1 className='bg-danger'> WELCOME TO  MY PROFILE</h1>

<img className='mx-auto d-block' src="/images/myself.jpg" alt="myself" />
      </div>
      <div className="container">

        <h1> HELLO MY  NAME IS ABEL PAUL </h1>
        <p> Software Developer / Data Scientist  </p>
        <a href="\About"> 
        <button className="btn btn-secondary"> 
        
        ABOUT ME </button></a>
      </div>
    </div>
  )
}

export default Home