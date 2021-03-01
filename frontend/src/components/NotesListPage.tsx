import React, { useContext } from 'react'
import Note from '../utils/Note'
import { NoteListContext } from '../utils/NoteListContext'
import { toCapitalize } from '../utils/StringUtils'


export default function NotesListPage() {
    const { noteList } = useContext(NoteListContext)
    return (
        <div>
            { noteList ? noteList?.map((l : Note, i : number) => 
                <>
                    <div key={i}> 
                        <h3>{toCapitalize(l?.title)} </h3> 
                        <i><p>"{l?.content.length >= 30 ? l?.content.substring(0,30)+"..." : l?.content}"</p></i>
                        <h5> by {toCapitalize(l?.author)}, {l?.date ?? "12/12/17 00:15"}</h5>
                    </div>
                    <hr/> 
                </>) : <p> we dont have content here </p> }
        </div>
    )
}