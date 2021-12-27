import Button from '../elements/Button';
const { useState } = require("react");

const EditTags = ({ topic = '', tags, setTags }) => {
  const [editingId, setEditingId] = useState(undefined);
  const [input, setInput] = useState('');

  const save = () => {
    if (editingId === undefined || input.trim() === '') return;
    const nextTags = [...tags];
    if (editingId < tags.length) nextTags[editingId] = input;
    else nextTags.push(input);
    setTags(nextTags);
  };

  const enableEdit = (index) => {
    save();
    setEditingId(index);
    setInput(tags[index] || '');
  };
  
  const saveHandler = () => {
    save();
    setEditingId(undefined);
  };

  const deteleHandler = (index) => {
    if (index === editingId) setEditingId(undefined);
    else if (index < editingId) setEditingId(editingId - 1);
    const nextTags = [...tags];
    nextTags.splice(index, 1);
    setTags(nextTags);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tag</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tags.map((tag, index) => (
          index === editingId
          ?
          <tr key={`${topic}-tag-row_${index}`}>
            <td><input onChange={(e) => setInput(e.target.value)} text={input} /></td>
            <td>
              <Button onClick={saveHandler} text="Save" />
              <Button onClick={() => deteleHandler(index)} text="Delete" />
            </td>
          </tr>
          :
          <tr key={`${topic}-tag-row_${index}`}>
            <td>{tag}</td>
            <td>
              <Button onClick={() => enableEdit(index)} text="Edit" />
              <Button onClick={() => deteleHandler(index)} text="Delete" />
            </td>
          </tr>
        ))}
        {
          editingId === tags.length
          ?
          <tr>
            <td><input onChange={(e) => setInput(e.target.value)} text={input} /></td>
            <td>
              <Button onClick={saveHandler} text="Save" />
            </td>
          </tr>
          :
          <tr>
            <td>Add a new tag...</td>
            <td>
              <Button onClick={() => enableEdit(tags.length)} text="Add" />
            </td>
          </tr>
        }
      </tbody>
    </table>
  );
}

export default EditTags;
