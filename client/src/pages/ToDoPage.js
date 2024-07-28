import '../index.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import ToDo from '../components/ToDo';

function ToDoPage() {
  return (
    <div>
        <Header />
        <NavBar />
        <ToDo />
    </div>
  );
}

export default ToDoPage;