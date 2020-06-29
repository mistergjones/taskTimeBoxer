import React from "react";

function Note(props) {
    function handleClick() {
        //
        props.onDelete(props.id); // will trigger the function in app.jsx
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;
