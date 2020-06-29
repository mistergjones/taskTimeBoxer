import React, { useState } from "react";

function CreateArea(props) {
    // statefull constants for both title and content
    // set initial state to blank values
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        // destruture to hold the name and the value when the input changes
        const { name, value } = event.target;

        // use the name and value to setNote
        setNote((prevNote) => {
            return {
                // now return all the prevous notes and add the newone
                ...prevNote,
                // require the [name] as opposed to name to ensure it references
                // the name constant above. This is how REACT works
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        // clear the note to ensure we go back to the placeholder text
        setNote({
            title: "",
            content: "",
        });
        // prevent reloading of screen
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <input
                    name="Duration"
                    placeholder="Duration (minutes) NOT IMPLEMENTED YET"
                />

                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
