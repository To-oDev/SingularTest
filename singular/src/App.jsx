/**
 * 07.2025
 * App component
 * Componente principal.
 * Gestiona la interacción entre los componentes principales.
 * 
 * Componentes principales:
 *  - Formulario: Permite la entrada de un valor númerico como n-ésimo númerr de la serie.
 *  - Resultado - Componente visible. Muestra el resultado de la serie hazta que se hace el primer calculo.
 *  - Serie: Componente no visible - Realiza el calculo del n-esimo número de la serie dada.
 */
import { useState } from 'react';
import './App.css'
import Form from './components/form/Form'
import Serie from './components/serie/Serie'
import Resultado from './components/resultado/Resultado'

function App() {
  const [num, setNum] = useState();
  const handleSubmit = (n) => {
    setNum(n);
    if (n < 1) setRes(null);
  };

  const [res, setRes] = useState();
  const handleResult = (n) => {
    setRes(n);
  }

  return (
    <>
      {res && <Resultado resultado={res} />}
      <Form onSubmit={handleSubmit}/>
      {num && <Serie valor={num} onCalculated={handleResult}/>}
    </>
  )
}

export default App
