import '../index.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CalorieTracker from '../components/CalorieTracker';

function FitnessPage() {
    return (
        <div>
            <Header />
            <NavBar />
            <CalorieTracker />
        </div>
    );
}

export default FitnessPage;