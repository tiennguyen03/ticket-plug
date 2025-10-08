import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Typography, TextField, Button, Box, MenuItem } from '@mui/material'

function Home() {
  const [formData, setFormData] = useState({
    movieName: '',
    dateTime: '',
    theater: '',
    platform: '',
    email: '',
    seat: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    // The URL of the FastAPI endpoint you just created
    const API_ENDPOINT = 'http://127.0.0.1:8000/ticket-request';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Convert the React state object into a JSON string
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success from server:', result);
      alert('Your ticket request was submitted successfully!');
      // Optionally, you could clear the form here
      
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('Failed to submit your request. Please check the console for details.');
    }
  }

  const platforms = ['AMC', 'Regal']

  return (
    <> 
      <Container maxWidth="md" sx={{ py: 8}}>
        <Box>
          <Typography variant="h1" sx={{ mb: 2, color: 'primary.main '}}>
            Get Movie Tickets for 50% Off
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary'}}>
            No subscriptions. No hidden fees. You request the movie, we book the ticket.
            </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex',
                flexDirection: 'column',
                gap: 3,
                bgcolor: 'background.paper',
                p: 4,
                borderRadius: 2,
                boxShadow: '0 2px 12px rgb(0, 0, 0, 0.08)'
          }}
        >
          <TextField
            fullWidth
            label="Movie Name"
            name="movieName"
            value={formData.movieName}
            onChange={handleChange}
            required
            placeholder="e.g., Dune: Part Two"
          />

          <TextField
            fullWidth
            label="Date & Time"
            name="dateTime"
            type="datetime-local"
            value={formData.dateTime}
            onChange={handleChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            fullWidth
            select
            label="Platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            required
          >
            {platforms.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            label="Theater Location"
            name="theater"
            value={formData.theater}
            onChange={handleChange}
            required
            placeholder="e.g., AMC Empire 25, New York"
          />

          <TextField
            fullWidth
            label="Prefered Seat (Optional)"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            placeholder="e.g., J14, J15"
            helperText="Please check the official platform's website and enter a available seat. We will try our best to accommodate you."
          />

          <TextField
            fullWidth
            label="Email (Optional)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            helperText="We'll send you order confirmation"
          />

          <Button 
            type="submit" 
            variant="contained" 
            size="large"
            sx={{ 
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Request Tickets
          </Button>

        </Box>
      </Container>
    </>
  )
}

export default Home
