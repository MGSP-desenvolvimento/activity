import React, { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';

// Styles
import GlobalStyle from '../../styles/global';
//Components
import Header from '../../components/Header';
import Board from '../../components/Board';
// Services
import firebaseServices from "../../services/FirebaseServices";

export default function Home() {
  const [ todo, setTodo ] = useState(false);
  
  useEffect(() => {
    const db = new firebaseServices();
    db.onTodos().on('value', (snapshot) => {
    const data = snapshot.val();
      data.map( (value, index) =>{
        if(value.cards === undefined){
          return value.cards = [];
        }
        return value;
      } )
      setTodo(data);
    });
  }, []);

  if(!todo){
    return(
      <>
      <Header/>
      <div>Carregando Conteúdo</div>
      <GlobalStyle />
      </>
    );
  }else{
    return (      
      <DndProvider  backend={HTML5Backend} >
        <Header/>
        <Board data={todo} />
        <GlobalStyle />
      </DndProvider>
    );
  }
}
