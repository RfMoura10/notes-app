import React, {useContext, useState} from 'react'
import { NoteListContext } from '../utils/NoteListContext';
import { getNow } from '../utils/StringUtils';


export default function NotesPage() {
    const [formTitle, setFormTitle] = useState<string>("");
    const [formAuthor, setFormAuthor] = useState<string>("");
    const [formContent, setFormContent] = useState<string>("");

    const {setNoteList} = useContext(NoteListContext)
    
    const addNoteToList = () => {
        setNoteList((prev : any) => [...prev, {
            title: formTitle,
            author: formAuthor,
            content: formContent,
            date: getNow()
        }])
        setFormTitle("")
        setFormAuthor("")
        setFormContent("")
    }

    return (
        <div>
            <h1> Create a Note! </h1>
            <input className="input-title" type="text" placeholder="Title" onChange={e => setFormTitle(e.target.value)} value={formTitle}/> <br/>
            <textarea rows={10} cols={100} placeholder="put your note here" className="input-content" onChange={e => setFormContent(e.target.value)} value={formContent}/> <br/>
            <input type="text" placeholder="Author" onChange={e => setFormAuthor(e.target.value)} value={formAuthor}/> <br/>
            <button onClick={addNoteToList}> create </button>
        </div>
    )
}
