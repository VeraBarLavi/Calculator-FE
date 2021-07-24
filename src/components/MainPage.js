import CalculatesList from './CalculatesList';
import CalculateForm from './CalculateForm';

const HomePage = () => (
    <div style={{ width: '65%', margin: 'auto' }}>
        <h4 style={{color: '#0000ff', marginTop: '40px' }}>New Calculation</h4>
        <CalculateForm />
        <hr style={{ border: '1px solid grey'}} />
        <h4 style={{color: '#0000ff', marginTop: '40px' }}>Calculation History</h4>
        <CalculatesList />
    </div>
);

export default HomePage;
