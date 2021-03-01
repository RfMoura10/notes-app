import React, {useState} from 'react';
import './App.css';
import NotesListPage from './components/NotesListPage';
import NotesPage from './components/NotesPage';
import Note from './utils/Note';
import { Pages } from './utils/Pages';

const lists : Note[] = [
  {
    title: "my life",
    content: "my life is a good thing!!!",
    author: "rafael moura"
  },
  {
    title: "my life",
    content: "my life is a good thing!!! I dont want nothing anymore",
    author: "Rafael Moura"
  },
  {
    title: "my life",
    content: "its my life",
    author: "Rafael Moura"
  },
]

function App() {
  const [activePage, setActivePage] = useState<Pages>(Pages.new)
  
  return (
    <div>
    <button onClick={() => setActivePage(Pages.new)}> new note </button>
    <button onClick={() => setActivePage(Pages.list)}> notes </button>
    {
      activePage == Pages.new ? (
        <NotesPage/>
      ) : activePage == Pages.list && (
        <NotesListPage list={lists}/>
      )
    }
    </div>
  );
}

export default App;
