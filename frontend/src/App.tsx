import React, {useState} from 'react';
import './App.css';
import NotesListPage from './components/NotesListPage';
import NotesPage from './components/NotesPage';
import { NoteListProvider } from './utils/NoteListContext';
import { Pages } from './utils/Pages';

function App() {
  const [activePage, setActivePage] = useState<Pages>(Pages.new)
  
  return (
    <NoteListProvider>
      <div className="app">
      <button onClick={() => setActivePage(Pages.new)}> new note </button>
      <button onClick={() => setActivePage(Pages.list)}> notes </button>
      {
        activePage === Pages.new ? (
          <NotesPage/>
        ) : activePage === Pages.list && (
          <NotesListPage/>
        )
      }
      </div>
    </NoteListProvider>
  );
}

export default App;
