import React, { useState, useEffect, useContext, useRef } from 'react';
import '../../static/Keys.css'
import { Row, Col, Button } from 'react-bootstrap';
import { GlobalContext } from '../js/Global';


function Keys() {
  const keysdata = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const calsdata = ['+', '-', 'x', '÷']

  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [calState, setCalState] = useState("+")
  const [answer, setAnswer] = useState("")
  const { startState, setStartState } = useContext(GlobalContext)
  const { inputName, setInputName } = useContext(GlobalContext)
  const [timer, setTimer] = useState(0)
  const increment = useRef(null)

  //   function safeEval(val){
  //     return Function('"use strict";return (' + val + ')')();
  // }

  useEffect(() => { }, [startState]);
  useEffect(() => { }, [timer]);
  useEffect(() => { }, [value1]);
  useEffect(() => { }, [value2]);
  useEffect(() => { }, [calState]);

  function handleBack() {
    clearInterval(increment.current)
    setStartState(false)
    setTimer(0)
  }

  const BackButton = () => {
    return (
      <Button
      size="lg"
      variant="back"
      className="backpad"
      onClick={(event) => handleBack()}
    >
      BACK
    </Button>      
    )
  }

  const DisplayName = () => {
    return (
      <h2>Playing: {inputName} ({formatTime()})</h2>
    )
  } 
  
  function handleStart() {
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }


  function handleAns() {
    if (value1 !== "" && value2 !== "") {
      if (calState === "+") {
        setAnswer(parseInt(value1) + parseInt(value2))
      } else if (calState === "-") {
        setAnswer(parseInt(value1) - parseInt(value2))
      } else if (calState === "x") {
        setAnswer(parseInt(value1) * parseInt(value2))
      } else {
        setAnswer(parseInt(value1) / parseInt(value2))
      }
    }
  }

  function handleCalPad(event) {
    setCalState(event.currentTarget.value)
  }

  function handleClear(event) {
    setValue1("")
    setValue2("")
    setCalState("+")
    setAnswer("")
  }

  const Items = (item, val) => {
    if (val === "") {
      return (
        <div className={`value-display ${item}-section`}>
          <h3>{item}</h3>
        </div>
      )
    } else {
      const items = []
      for (var i = 0; i < val; i++) {
        items.push(<li key={i} className="apple"></li>)
      }
      return (
        <div className={`value-display ${item}-section`}>
          <h3>{item}: {val} </h3>
          {items}
        </div>)
    }
  }

  const Display = () => {
    return (
      <div id="display">
        {Items("Value1", value1)}
        <Button
          size="lg"
          variant="primary"
          disabled
        >
        {calState}
        </Button>
        {Items("Value2", value2)}
      </div>
    )
  }

  const Equal = () => {
    return (
        <Button
          size="lg"
          variant="primary"
          disabled
        >
        =
        </Button>
    )
  }


  function handleKeyPad(event) {
    if (value1 === "") {
      setValue1(event.currentTarget.value)
    } else if (value2 === "") {
      setValue2(event.currentTarget.value)
    }
  }

  const OthersBtn = () => {
    return (
      <>
      <Button
      size="lg"
      variant="warning"
      className="clearpad"
      onClick={(event) => handleClear()}
    >
      Clear
    </Button>
    <Button
      size="lg"
      variant="info"
      className="enterpad"
      onClick={() => handleAns()}
    >
          Enter
    </Button>
    </>
    )

  }
  const cals = calsdata.map((data) => (
    <Button
      size="lg"
      variant="primary"
      key={data}
      className="calpad"
      value={data}
      onClick={(event) => handleCalPad(event)}
    >
      {data}
    </Button>
  ));

  const keys = keysdata.map((data) => (
    <Button
      size="lg"
      variant="success"
      key={data}
      className="keypad"
      value={data}
      onClick={(event) => handleKeyPad(event)}
    >
      {data}
    </Button>
  ));

  if (startState) {
    if (increment !== null) {
      clearInterval(increment.current)
    }
    handleStart()
  } 

  return (
    <Col className="keys-section" xs={12} md={12} lg={12}>
      <Col className="header-section" xs={10} md={10} lg={10}>
      <BackButton />
        <DisplayName />
      </Col>
      <Row>
        <Col className="sub-section" xs={10} md={10} lg={3}>
          <Display />
        </Col>
        <Col className="equal-section sub-section" xs={10} md={10} lg={1}>
        <Equal />
        </Col>
        <Col className="sub-section" xs={10} md={6} lg={6}>
          {Items("Answer", answer)}
        </Col>
      </Row>
      <Col className="pads-section" xs={10} md={6} lg={5}>
      <div id="pads">
          <div id="calkey">
            <div id="cal">
            {cals}
            </div>
            <div id="key">
            {keys}
            </div>
          </div>
          <div id="other">
          <OthersBtn />
          </div>
      </div>
      </Col>
    </Col>
  );
}

export default Keys;