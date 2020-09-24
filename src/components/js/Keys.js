import React, { useState, useEffect, useContext } from 'react';
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
  const { startState, setStartState} = useContext(GlobalContext)

  //   function safeEval(val){
  //     return Function('"use strict";return (' + val + ')')();
  // }

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
          <ul>{items}</ul>
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
          className="keypad"
          onClick={() => handleAns()}
        >
          Cal
        </Button>
      </div>
    )
  }

  function handleKeyPad(event) {
    if (value1 === "") {
      setValue1(event.currentTarget.value)
    } else if (value2 === "") {
      setValue2(event.currentTarget.value)
    }
  }

  useEffect(() => { }, [value1]);
  useEffect(() => { }, [value2]);
  useEffect(() => { }, [calState]);

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

  return (
    <Col xs={12} md={12} lg={12}>
      <Row>
        <Col className="sub-section" xs={10} md={5} lg={5}>
          {Items("Answer", answer)}
        </Col>

        <Col className="sub-section" xs={10} md={5} lg={5}>
          <Display />
        </Col>
      </Row>
      <Col className="pads-section" xs={10} md={4} lg={3}>
      <div id="calpads">
        {cals}
      </div>
      <div id="keypads">
        {keys}
        </div>
      </Col>
    </Col>
  );
}

export default Keys;