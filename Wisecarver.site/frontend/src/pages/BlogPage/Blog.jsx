import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';

const Blog = () => {
  const { user, isAdmin } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/blog/');
        setPosts(response.data);
        setError('');
      } catch (err) {
        setError(err.response?.data?.detail || 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleCreatePost = () => {
    navigate('/blog/create');
  };

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1>LiFi Blog: Empowering Houston with Light-Based Connectivity</h1>
          <p>
            Discover how LiFi technology is revolutionizing internet access in Houston’s
            healthcare, energy, and logistics sectors with unmatched speed and security.
          </p>
          {isAdmin() && (
            <Button variant="primary" onClick={handleCreatePost}>
              Create New Post
            </Button>
          )}
        </Col>
      </Row>

      {error && (
        <Alert variant="danger" className="mb-4">
          {error}
        </Alert>
      )}

      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts available. Check back soon!</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {posts.map((post) => (
            <Col key={post.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    {post.is_premium && !user ? (
                      <span>
                        Premium content.{' '}
                        <Link to="/login">Log in</Link> to read more.
                      </span>
                    ) : (
                      post.content.substring(0, 150) + '...'
                    )}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      By {post.author} on{' '}
                      {new Date(post.created_at).toLocaleDateString()}
                    </small>
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    as={Link}
                    to={`/blog/${post.id}`}
                    disabled={post.is_premium && !user}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Blog;