import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCalculates } from '../services/calculates';
import { Button, Row, Col } from 'react-bootstrap';
import CalculateForm from './CalculateForm';

const CalculatesList = () => {
    const dispatch = useDispatch();
    const calculates = useSelector(state => state.calculatesSlice.calculates);

    useEffect(() => {
        GetCalculates(dispatch);
    }, []);

    return calculates.map(c =>
        <div key={c.id} style={{ marginBottom: '1rem' }}>
            <ListRow calculate={c} />
        </div>
    );
}

const ListRow = ({ calculate }) => {
    const [isEditing, setIsEditing] = useState(false);

    return isEditing
        ? <div>
            <CalculateForm calculate={calculate} setIsEditing={setIsEditing} />
            <hr />
        </div>
        : <div>
            <Row>
                <Col xs lg="8" style={{ marginTop: '10px' }}>{calculate.number1} {calculate.operation} {calculate.number2} {"="} {calculate.result}</Col>
                <Col xs lg="2"><Button  variant="secondary" onClick={() => setIsEditing(!isEditing)}>Edit</Button></Col>    
            </Row>
            <hr />
        </div>
}

export default CalculatesList;
