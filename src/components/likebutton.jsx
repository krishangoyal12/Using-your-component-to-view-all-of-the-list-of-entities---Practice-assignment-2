import React, { useState } from 'react';

const LikeButton = ({isLiked: initialLiked}) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        backgroundColor: isLiked ? 'red' : 'gray',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
        height: '30px',
        width: '60px',
        fontSize: '14px',
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;