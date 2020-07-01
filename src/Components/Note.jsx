import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Interval from "./Interval";

function Note(props) {
    function handleClick() {
        //
        props.onDelete(props.id); // will trigger the function in app.jsx
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <Interval />

            <button
                style={{ color: "red", backgroundColor: "white" }}
                onClick={handleClick}
            >
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
