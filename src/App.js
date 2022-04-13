import './App.css';
import Boton from './components/boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor =>{
     setInput(input + valor);
  }

  const manejarClear = () =>{
     setInput('');
  }

  const calcularInput = () =>{
     if(input){
      setInput(evaluate(input))
     }
  }

  return (
    <div className='App'>
      <div className='calculadora-contenedor'>
      <Pantalla input = {input} />
         <div className='fila'>
            <Boton manejarClick = {agregarInput}>7</Boton>
            <Boton manejarClick = {agregarInput}>8</Boton>
            <Boton manejarClick = {agregarInput}>9</Boton>
            <Boton manejarClick = {agregarInput}>*</Boton>
         </div>
         <div className='fila'>
            <Boton manejarClick = {agregarInput}>4</Boton>
            <Boton manejarClick = {agregarInput}>5</Boton>
            <Boton manejarClick = {agregarInput}>6</Boton>
            <Boton manejarClick = {agregarInput}>-</Boton>
         </div>
         <div className='fila'>
            <Boton manejarClick = {agregarInput}>1</Boton>
            <Boton manejarClick = {agregarInput}>2</Boton>
            <Boton manejarClick = {agregarInput}>3</Boton>
            <Boton manejarClick = {agregarInput}>+</Boton>
         </div>
         <div className='fila'>
            <Boton manejarClick = {agregarInput}>0</Boton>
            <Boton manejarClick = {agregarInput}>.</Boton>
            <Boton manejarClick = {calcularInput}>=</Boton>
            <Boton manejarClick = {agregarInput}>/</Boton>
         </div>
         <div className='fila'>
            <BotonClear manejarClear = {manejarClear}>Clear</BotonClear>
         </div>
      </div>
    </div>
  );
}

export default App;
