import { useDispatch, useSelector } from "react-redux"
import { notesSelectors, notesSlice } from "./notesSlices"
import { nanoid } from "@reduxjs/toolkit"

export const Notes = () => {
    const notes = useSelector(notesSelectors.selectAll)
    const dispatch = useDispatch()

    const handleNoteSubmit = (event) => {
        event.preventDefault()
        const note = event.currentTarget.note.value;
        dispatch(notesSlice.actions.addNote({
            content: note,
            id: nanoid()
        }))
    }

    const handleRemoveNote = (id) => dispatch(notesSlice.actions.removeNote(id))

    return <div className="Notes">
        <h4>Mes notes pour ma commande</h4>
        <form onSubmit={handleNoteSubmit}>
            <label>Saisir une note
                <textarea name="note"></textarea>
            </label>
            <button type="submit" className="AddNote">Ajouter</button>
        </form>
        <ul className="NodeList">
            {
                notes && notes?.map(note => 
                    <li key={note.id}>
                        {note.content}
                        <button onClick={() => handleRemoveNote(note.id)}>❌</button>
                    </li>
                )
            }
        </ul>
    </div>
}