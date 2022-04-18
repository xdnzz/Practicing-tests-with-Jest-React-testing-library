import './App.css';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1 className={count<0?'vermelho' : count >0?'azul' : 'black'}>{count}</h1>
      <button onClick={()=>setCount(count-1)} className="botaoDiminuir">Remover</button>
      <button onClick={()=>setCount(count+1)} className="botaoAumentar">Adicionar</button>
    </div>
  );
}

export default App;
