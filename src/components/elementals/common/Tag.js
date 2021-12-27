import './style/Tag.css';
import '../icons/close.css';
import { useNavigate } from 'react-router';

function handleClickTag (navigate, _id) {
  if (_id === undefined) {
    navigate(`/error`);
  } else {
    navigate(`/tag/${_id}`)
  }
}

const Tag = ({ tag, handleDeleteTag }) => {
  const navigate = useNavigate();
  return (
    <div className='tag-container'>
      <span className='tag-first-area' onClick={() => handleClickTag(navigate, tag._id)}>
        <span className='tag-first-area-text'>{tag.name}</span>
      </span>
      <span className='tag-second-area' onClick={handleDeleteTag}>
        <span className='icon-close' />
      </span>
    </div>
  );
}

export default Tag;
