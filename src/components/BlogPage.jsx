import React, { useState } from 'react'

const BlogPage = () => {
  // Sample blog posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'June 15, 2023',
      author: 'Jane Doe',
      content: 'React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.',
      likes: 15
    },
    {
      id: 2,
      title: 'Understanding React Hooks',
      date: 'July 2, 2023',
      author: 'John Smith',
      content: 'React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have changed how we write React components.',
      likes: 23
    },
    {
      id: 3,
      title: 'Building Responsive UIs',
      date: 'August 10, 2023',
      author: 'Alex Johnson',
      content: 'Creating responsive user interfaces is essential for modern web applications. This post explores techniques for building UIs that work well on all device sizes.',
      likes: 8
    }
  ])

  // Function to handle liking a post
  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: 20 }}>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: 10, marginBottom: 20 }}>Blog Posts</h2>
      
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: 30, padding: 15, border: '1px solid #eee', borderRadius: 8 }}>
          <h3 style={{ marginTop: 0 }}>{post.title}</h3>
          <div style={{ display: 'flex', fontSize: '0.9rem', color: '#666', marginBottom: 10 }}>
            <span>{post.date}</span>
            <span style={{ margin: '0 10px' }}>•</span>
            <span>By {post.author}</span>
          </div>
          <p style={{ lineHeight: 1.6 }}>{post.content}</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button 
              onClick={() => likePost(post.id)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#555'
              }}
            >
              <span style={{ marginRight: 5 }}>❤️</span>
              <span>{post.likes} likes</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogPage