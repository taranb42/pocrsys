// src/components/MyGrid.tsx

import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define the type for the props
interface MyGridProps {
  items: { id: number; name: string; description: string }[];
}

// Styled component for the Paper
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MyGrid: React.FC<MyGridProps> = () => {
    const items = [
        { id: 1, name: 'Item 1', description: 'Description of Item 1' },
        { id: 2, name: 'Item 2', description: 'Description of Item 2' },
        { id: 3, name: 'Item 3', description: 'Description of Item 3' },
        { id: 4, name: 'Item 4', description: 'Description of Item 4' },
        { id: 5, name: 'Item 5', description: 'Description of Item 5' },
      ];
      
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <StyledPaper>
            <Typography variant="h6" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
          </StyledPaper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyGrid;
