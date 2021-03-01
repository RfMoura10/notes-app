import React from 'react'
import Note from '../utils/Note'
import { toCapitalize } from '../utils/StringUtils'

interface Props {
    list?: Note[]
}

export default function NotesListPage({list}: Props) {
    return (
        <div>
            { list ? list?.map((l,i) => 
                <>
                    <div key={i}> 
                        <h3>{l?.title} </h3> 
                        <p>{l?.content.length >= 30 ? l?.content.substring(0,30)+"..." : l?.content}</p>
                        <h5> by {toCapitalize(l?.author)}, {l?.date ?? "12/12/17 00:15:56"}</h5>
                    </div>
                    <hr/> 
                </>) : <p> we dont have content here </p> }
        </div>
    )
}