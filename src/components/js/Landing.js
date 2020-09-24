import React, { useState, useEffect, useContext } from 'react';
import '../../static/Landing.css'
import { useForm } from 'react-hook-form'
import { Row, Col } from 'react-bootstrap';
import { GlobalContext } from '../js/Global';


function Landing() {
  const { register, handleSubmit } = useForm("");
  const [inputName, setName] = useState("")
  const { startState, setStartState} = useContext(GlobalContext)
  
  useEffect(() => { }, [inputName]);

  const DisplayName = () => {
    if (inputName !== "") {
      return (
        <h1>Playing: {inputName}</h1>
      )
    } else {
      return (
        <h1></h1>
      )
    }
  }

  const Input = ({ label, register, required }) => ( 
    <>
      <h3>Provide Your Name</h3>
      <input name={label} ref={register({ required })} />
    </>
  );

  function onSubmit(data) {
    setName(data['Name'])
    setStartState(true)
    console.log(startState)
  }

  if (startState) {
    return (
      <Col xs={12} md={12} lg={12} >
      <div className="landing-section">
        <DisplayName />
        </div>
      </Col>   
    )
  }
  return (
    <Col xs={12} md={12} lg={12} >
      <div className="landing-section">
    <h2>Cal Kids</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Input label="Name" register={register} required />
    <input type="submit"  value="Start" />
      </form>
      <DisplayName />
      </div>
    </Col>
  )
}

export default Landing;