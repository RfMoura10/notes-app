import Note from "./Note";

export function NoteValidation({title, content, author} : Note) : boolean {
    return title.length != 0 && content.length != 0 && author.length != 0
}