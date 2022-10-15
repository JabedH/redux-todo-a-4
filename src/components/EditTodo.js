import React from "react";

const EditTodo = () => {
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          //   value={editFormData.email}
          //   onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button">
          {/* onClick={handleCancelClick} */}
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditTodo;
