import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Formulario from './Pages/Inscricao';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div>
      <NavBar/>
      <Formulario/>
      <Footer/>
    </div>
  );
}

export default App;
