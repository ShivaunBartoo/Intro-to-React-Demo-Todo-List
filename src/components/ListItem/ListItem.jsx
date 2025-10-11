/*
This component represents a single todo row: checkbox (local UI), text input, and delete button.
Remember: The parent (TodoList) owns the list data and removal logic. This state has been "lifted up".

Props:
  - id: unique identifier for this item (passed back to parent on delete).
  - handleDelete: callback to remove this item; called as handleDelete(id).
*/
import { useState } from "react";
import "./ListItem.css";

// Props are a lot like function arguments. When we use the ListItem component
// we can pass it attributes that become properties on the props object here. 
// eg: <ListItem id="123" handleDelete={someFunction}/>
export default function ListItem({ id, handleDelete, handleChange }) {

    // Local checked state controls the visual "done" state for this row only.
    // If we wanted to do anything with this state besides changing the component's style,
    // It would be a better choice to lift this state up to the parent.
    const [checked, setChecked] = useState(false);

    // Toggle local checked state when checkbox changes.
    const onCheckboxChange = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <div className={`ListItem ${checked ? "Checked" : ""}`}>
            <input
            className="ListItemCheckbox"
                type="checkbox"
                checked={checked}
                onChange={onCheckboxChange}
                aria-label="mark done"
            />

            {/* Text input: this is currently "uncontrolled" for the sake of simplicity.
                It would be preferable to make this a controlled input by lifting the state up.
                Lifting the checked and text state up to the parent would also allow us to
                do things like persisting the list to localStorage or a backend.
                more info: https://reactjs.org/docs/forms.html#controlled-components */}
            <input
                className="ListItemBody"
                type="text"
                placeholder="What do you want to do today?"
                onChange={() => handleChange(id)}
            />

            {/* Delete button: call the parent's handler with this item's id.*/}
            <button onClick={() => handleDelete(id)} className="DeleteButton material-icons">
                close
            </button>
        </div>
    );
}
