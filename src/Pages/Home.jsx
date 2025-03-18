import React from 'react'
import Postcard from '../components/postcard'

export default function Home({initialPosts}) {
  return (
    <div>
      {initialPosts.map(post => (
        <Postcard
        key={post.id}
        profileImage={post.profileImage}
        username={post.username}
        content={post.content}
        isLiked={post.isLiked}
        />
      ))}
    </div>
  )
}
