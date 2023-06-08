import { useState } from 'react';
import { v4 as uuid } from 'uuid'

import {
  Container,
  Todolist,
  Input,
  Button,
  ListItem,
  Trash,
  Check

} from './style'

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  function inputChange(e) {
    setTask(e.target.value)
    console.log(task);
  }
  function click() {
    if(task){
      setList([...list, { id: uuid(), task, finished: false }])
    }

    
  }
  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)

  }
  function deletarTarefa(id) {
    const dropTask = list.filter(item => item.id !== id)
    setList(dropTask)
  }
  return (
    <>
      <Container>
        <Todolist>
          <Input onChange={inputChange} placeholder="O que tenho para fazer..." />
          <Button onClick={click}>Adicionar</Button>

          <ul>
            {

              list.length > 0 ? (

                list.map(item => (
                  <ListItem isFinished={item.finished} key={item.id}  >
                    <Check onClick={() => finalizarTarefa(item.id)} />
                    <li>{item.task}</li>
                    <Trash onClick={() => deletarTarefa(item.id)} />
                  </ListItem>
                ))
              ) : (
                <h3>Não há item na lista</h3>
              )
            }
          </ul>
        </Todolist>
      </Container>
    </>
  )
}

export default App
