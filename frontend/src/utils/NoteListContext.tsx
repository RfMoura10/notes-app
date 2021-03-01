import React, { createContext, ReactChild, useState } from 'react'
import Note from './Note'

export const NoteListContext = createContext<any>(null)

export function NoteListProvider({children}:{children:ReactChild}) {
    const [noteList, setNoteList] = useState<Note[]>([{
        title: "test-title",
        author: "test-author",
        content: "test-content"
    }])

    const providerValues : any = {noteList, setNoteList}
    
    return (
        <NoteListContext.Provider value={providerValues}>
           {children} 
        </NoteListContext.Provider>
    )
}
