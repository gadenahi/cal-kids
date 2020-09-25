import React, { useEffect, useContext } from 'react';
import '../../static/Landing.css'
import { useForm } from 'react-hook-form'
import { Col } from 'react-bootstrap';
import { GlobalContext } from '../js/Global';
import Typist from 'react-typist'


function Landing() {
  const { register, handleSubmit } = useForm("");
  const { startState, setStartState } = useContext(GlobalContext)
  const { inputName, setInputName } = useContext(GlobalContext)

  useEffect(() => { }, [startState]);
  useEffect(() => { }, [inputName]);

  const Input = ({ label, register, required }) => (
    <>
      <h4>Practice for Single Digit Calculator</h4>
      <h3>Start with your name</h3>
      <input name={label} ref={register({ required })} />
    </>
  );

  function onSubmit(data) {
    setInputName(data['Name'])
    setStartState(true)
  }

  return (
    <Col xs={12} md={12} lg={12} >
      <div className="landing-section">
        <Typist>
          <h1>Cal Kids</h1>
        </Typist>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input label="Name" register={register} required />
            </div>
            <div>
            <input className="submit-button" type="submit" value="START" />
            </div>
        </form>
      </div>
    </Col>
  )
}

export default Landing;