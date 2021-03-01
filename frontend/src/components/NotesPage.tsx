import React, {useState} from 'react'

interface Props {
    onNoteCreated: () => void 
}

export default function NotesPage() {
    const [formTitle, setFormTitle] = useState<string>("");
    const [formAuthor, setFormAuthor] = useState<string>("");
    const [formContent, setFormContent] = useState<string>("");
    
    return (
        <div>
            <h1> Create a Note! </h1>
            <input type="text" placeholder="Title" onChange={e => setFormTitle(e.target.value)}/>
            <input type="text" placeholder="Author" onChange={e => setFormAuthor(e.target.value)}/> <br/>
            <textarea onChange={e => setFormContent(e.target.value)}></textarea> <br/>
            <button> create </button>
        </div>
    )
}
