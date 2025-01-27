import React, { useState, useContext, useEffect } from 'react'
import { MdClose } from 'react-icons/md';
// CONTEXTS
import BoardContext from '../Board/context';
// Styles
import {Container, ModalDiv, Form} from './styles';
// SERVICES
import firebaseServices from "../../services/FirebaseServices";
import { AuthContext } from '../../Auth/AuthContext';

export default function Modal({ id="modal", onClose = () => {}, initialState }){
  const [title, setTitle] = useState({
    title: "",
    description: "",
    user: {
      name: "",
      url: "",
    },
  });
  const [ users, setUsers ] = useState();
  const [ edit, setEdit ] = useState(initialState);

  useEffect(() => {
    async function fetchData(){
      const db = new firebaseServices();
      let user = await db.getUsers();
      setUsers(JSON.parse(JSON.stringify(user)));
    }
    fetchData();

    if(edit !== undefined ){
      setTitle(edit);
    }
  }, [edit]);

  const { refresh } = useContext(BoardContext);
  const { usuario } = useContext(AuthContext);

  const handleOnChange = (e) => {
    const state = Object.assign({}, title);
    const campo = e.target.id;
    if(campo === "user"){
      users.forEach( (value, index) => {
        if(value.name === e.target.value){
          state[campo].name = value.name
          state[campo].url = value.url
        }
      });
    }else{
      state[campo] = e.target.value;
    }
    setTitle(state);
  }
  const createTodoSync = () => {
    const db = new firebaseServices();
    if(edit){
      db.updateTodo( edit.listIndex , title );

      db.saveLogs(usuario.email, usuario.uid, title, "updated", "updated" );

      setEdit(false);
    }else{
      db.creatTodo(title);

      db.saveLogs(usuario.email, usuario.uid, title, "Created" , "Created" );
    }
    refresh();
    onClose();
  }
  
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick} value={title}  >
      <Container>
        <header>
          <h2>Adicionar ou editar um item</h2>
          <button className="close" onClick={onClose} >
            <MdClose size={24} color="#FFF" />
          </button>
        </header>
        
        <Form>
          
          <div className="row">
            <div className="col-10">
              <label htmlFor="fname">Titulo</label>
            </div>
            <div className="col-90">
              <input 
                className="textInput"
                type="text" 
                id="title" 
                onChange={ handleOnChange }
                value = { title.title }
              />
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              <label htmlFor="lname">Descrição</label>
            </div>
            <div className="col-90">
              <input 
                className="textInput" 
                type="text" 
                id="description" 
                onChange={ handleOnChange } 
                value={ title.description }
              />
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              <label htmlFor="user">Responsável</label>
            </div>
            <div className="col-90">
              <select id="user" name="user" onChange={ handleOnChange } >

                <option id="user" key="0" value="123" ></option>

                { !!users 
                && 
                users.map( (value, index) => (
                  <option 
                    id="user" 
                    key={value.id} 
                    value={value ? value.name: ""}
                  > 
                  {value ? value.name: ""}

                </option>) ) }
              </select>
            </div>
          </div>
        


        </Form>

        <footer>
          <button className="cancel" onClick={onClose} > Cancelar </button>
          <button className="save" onClick={ createTodoSync } > Salvar </button>
        </footer>     

      </Container>
    </ModalDiv>
  );
}
