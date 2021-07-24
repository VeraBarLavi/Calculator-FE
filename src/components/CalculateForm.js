import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import { EditCalculate, NewCalculate, DeleteCalculate } from '../services/calculates';
import { useDispatch } from 'react-redux';

const CalculateForm = ({ calculate, setIsEditing }) => {
    const operations = ['+', '-', '*', '/'];
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState();
    const [isNewCalculate, setIsNewCalculate] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if(calculate !== undefined) {
            setIsNewCalculate(false);
            setNumber1(calculate.number1);
            setNumber2(calculate.number2);
            setOperation(calculate.operation);
            setResult(calculate.result);
        }
        else {
            setIsNewCalculate(true);
        }
    }, [calculate]);

    const onResult = (value) => {
        setResult(value);
    }

    return <Form
        onSubmit={event => {
            event.preventDefault();
            if(isNewCalculate) {
                NewCalculate(dispatch, {number1: Number(number1), number2: Number(number2), operation: operation}, onResult);
            }
            else {
                EditCalculate(dispatch, {id: calculate.id, number1: Number(number1), number2: Number(number2), operation: operation});
                setIsEditing(false);
            }
        }}
    >
        <Row className="justify-content-md-center">
            <Col xs lg="2">
                <Form.Label>Number1</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={'Num1'}
                    value={number1}
                    required={true}
                    onChange={event => setNumber1(event.target.value)} />
            </Col>
            <Col  xs lg="1">
                <Form.Label>Op</Form.Label>
                <Form.Control as='select'            
                    required={true}
                    value={operation}
                    onChange={event => setOperation(event.target.value)}>
                    <option key={-1} value={''}>{''}</option>
                    {operations.map((o, idx) => <option key={idx}>{o}</option>)}
                </Form.Control>
            </Col>
            <Col xs lg="2">
                <Form.Label>Number2</Form.Label>
                <Form.Control type='number' step='0.01'
                    placeholder={'Num2'}
                    value={number2}
                    required={true}
                    onChange={event => setNumber2(event.target.value)} />
            </Col>
            <Col xs lg="1"><div style={{ marginTop: '35px', textAlign: 'center' }}>{"="}</div></Col>           
            <Col xs lg="2">
                <Form.Label>Result</Form.Label>
                <Form.Control type='number' step='0.01'              
                    value={result}
                    disabled />
            </Col>
            <Col xs lg="4">
                <div style={{ marginTop: '32px' }}>
                    {isNewCalculate
                        ? <Button variant='primary' type='submit'>Calculate</Button>
                        : <div>
                            <Button style={{ marginRight: '2px'}} variant='danger'
                            onClick={() => DeleteCalculate(dispatch, calculate)}>Delete</Button>
                            <Button style={{ marginRight: '2px'}} variant='success' type='submit'>Save</Button>
                            <Button style={{ marginRight: '2px'}} variant='default' onClick={() => setIsEditing(false)}>Cancel</Button>
                        </div>}
                </div>
            </Col>
            
        </Row>
    </Form>
}

export default CalculateForm;
