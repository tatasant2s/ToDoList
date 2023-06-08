import { useState } from 'react';
import './home_style.css';
import '../../components/card/card';
import { Card } from '../../components/card/card';

export function HomePrincipal() {
  const [tarefaName, setTarefa] = useState('');
  const [tarefaList, setTarefaList] = useState([]);

  function handleAddTarefa() {
    const newTarefa = {
      name: tarefaName,
    };

    setTarefaList(prevState => [...prevState, newTarefa]);
  }

  function handleDelete(index){
    setTarefaList(prevState => prevState.filter((tarefa, i) => i!== index));
  }

  function eventHandler(event) {

  }


  return (
    <div className='container'>
      <header>
        <h1>TO DO LIST</h1>
      </header>
      
      <main>
        <input type="text" onclick={eventHandler} placeholder='Insira Uma Tarefa' onChange={e=> setTarefa(e.target.value)}/>
        <button type='button' onClick={handleAddTarefa}> Criar Tarefa </button>
      </main>
      
      {
        tarefaList.map((tarefa, index) => <Card handleDelete={handleDelete} key={tarefa.name} id={index} name={tarefa.name}/>)
      }

    </div>
  );
}

