import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container, Typography, TextField, Button, Box, MenuItem } from '@mui/material'

function Home() {
  const [formData, setFormData] = useState({
    movieName: '',
    dateTime: '',
    theater: '',
    platform: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted', formData)
    // Connect to database later
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
            label=" Movie Name"
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
            label="Theater Location"
            name="theater"
            value={formData.theater}
            onChange={handleChange}
            required
            placeholder="e.g., AMC Empire 25, New York"
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
