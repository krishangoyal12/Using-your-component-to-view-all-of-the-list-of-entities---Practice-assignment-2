import React from 'react'
import LikeButton from './likebutton'

export default function Postcard({profileImage,username,content,isLiked}) {
  return (
    <div>
      <div style={{border: '2px grey solid', margin: '5px'}}>
    <img src={profileImage} alt="" style={{height: '90px', width: '90px', margin: '10px', borderRadius: '50%'}}/>
    <h2>{username}</h2>
    <p style={{padding: '0px 5px 0 5px'}}>{content}</p>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <LikeButton isLiked={isLiked}/>

    </div>
      </div>
    </div>
  )
}
