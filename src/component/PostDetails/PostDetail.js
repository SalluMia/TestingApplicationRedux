import React from 'react'
import 
function PostDetail() {
    const [selectedPostId, setSelectedPostId] = useState(null);

    const handlePostClick = (postId) => {
      setSelectedPostId(postId);
    };
  return (
    <div>
          {selectedPostId ? (
        <PostDetails postId={selectedPostId} />
      ) : (
        posts.map(post => (
          <Card key={post._id} onClick={() => handlePostClick(post._id)}>
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  )
}

export default PostDetail
