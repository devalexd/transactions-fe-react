import './style/Tag.css';
import '../icons/close.css';
import { useNavigate } from 'react-router';

function handleClickTag(navigate: any, _id: string) {
  if (_id === undefined) {
    navigate('/error');
  } else {
    navigate(`/tag/${_id}`);
  }
}

const Tag = (props: TagProps) => {
  const { tag, handleDeleteTag } = props;

  const navigate = useNavigate();

  return (
    <div className="tag-container">
      <span className="tag-first-area" onClick={() => handleClickTag(navigate, tag._id)}>
        <span className="tag-first-area-text">{tag.name}</span>
      </span>
      <span className="tag-second-area" onClick={handleDeleteTag}>
        <span className="icon-close" />
      </span>
    </div>
  );
};

interface TagProps {
  tag: any;
  handleDeleteTag: any;
}

export default Tag;
