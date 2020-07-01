import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Description from "./Description";
import CreateArea from "./CreateArea";
// import Timer from "./Timer";
// import Interval from "./Interval";

function App() {
    // an array of notes constant to track state
    const [notes, setNotes] = useState([]);

    // recenve the new note to this function
    function addNote(newNote) {
        setNotes((prevNotes) => {
            // add to the notes array via the spread array.
            return [...prevNotes, newNote];
        });
    }

    // id of the note to be deleted
    function deleteNote(id) {
        // get hold of previous notes array
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                // keep everything but the index id we want to delete
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <Description />
            {/* <Timer /> */}
            {/* <Interval /> */}

            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
