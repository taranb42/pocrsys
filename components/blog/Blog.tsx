// pages/blog.tsx
import { useState } from 'react';
import { Grid, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface BlogPost {
  title: string;
  content: string;
}

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const handleAddPost = () => {
    if (title && content) {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="container mx-auto my-10">

    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleAddPost}>
          Add Post
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Content</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post, index) => (
                <TableRow key={index}>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </div>
  );
};

export default Blog;
