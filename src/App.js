import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componenes propio Greeting */}
        {/*<Greeting name="Nelson"></Greeting>*/}
        {/*componente de ejemplo de funcional*/}
        {/*<GreetingF name="Nelson"></GreetingF>*/}
        {/*Componente de listado de tareas*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/* Tarea de contacto */}
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
