import { useEffect, useState } from 'react';
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
      <Form onSubmit={handleSubmit}/>
      {num && <Serie valor={num} onCalculated={handleResult}/>}
      {res && <Resultado resultado={res} />}
    </>
  )
}

export default App
