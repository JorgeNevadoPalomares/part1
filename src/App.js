import './App.css';
import Avatar from './Avatar';
import Avatar2 from './Avatar2';
import Contador from './Contador';
import Mensaje from './Mensaje';
import StarWarsTitle from './StarWars';

function App() {
  const mensaje = "Hola";
  const a = 5;
  const b = 10;
  return (
    <div className="App">
      <h2>{mensaje + " Mundo"}</h2>
      <p>La suma de {a} y {b} es: {a + b}</p>
      <p>Fecha en formato de String {+new Date()}</p>
      <br />
      <p>Número aleatorio con Math {Math.random()}</p>
      <br />
      <strong>Estamos trabajando en la creacion de una pagina con react</strong>
      <Mensaje color="green" message="Mi nombre es Jorge Nevado Palomares"/>
      <Mensaje message="Estamos"/>
      <Mensaje message="aprendiendo"/>
      <Mensaje message="a pasar parametros"/>
      <Despedida />
      <Datos />
      <div className="avatarsContainer">
        <div class="avatarBox"><Avatar/></div>
        <div class="avatarBox"><Avatar2/></div>
      </div>
      <StarWarsTitle />
      <p>Probamos a hacer un commit desde el usuario desarrollo nevado, usando github</p>
      <p>Probamos a hacer un commit desde Jorge Nevado, despues de hacer el fork con desarrollo nevado</p>
      <div className="App">
        <h2>Ejemplo de Contador</h2>
        <Contador valor={0} incrementar={() => console.log("Incrementar")} decrementar={() => console.log("Decrementar")} />
      </div>
    </div>
  );
}

function Datos() {
  return (
    <div>
    <p>Estoy aprendiendo React</p>
    <p>Telefono: 644248659</p>
    <p>Email: jorgenevadop@gmail.com</p>
    <p>Direccion: Calle Guadiana 26B</p>
    </div>
  );
}

function Despedida() {
return <h1>Adios Mundo</h1>;
}

export default App;
