import React from 'react';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const aprendizados = ['HTML','CSS', 'JS', 'Git', 'GitHub', 'Jest', 'React'];

function App() {
  return (
    <ul>
      {aprendizados.map((elemento) => Task(elemento))}
    </ul>
    
  );
}

export default App;
