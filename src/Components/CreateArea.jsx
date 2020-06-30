import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    // establish a constant for tracking the state of the note area
    // to see if it needs expanding when addinga note
    const [isExpanded, setExpanded] = useState(false);

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

    function expand() {
        // set expanded to true
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={note.title}
                        placeholder="Title"
                    />
                ) : null}
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <input
                    name="Duration"
                    placeholder="Duration countdown... NOT IMPLEMENTED YET"
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
