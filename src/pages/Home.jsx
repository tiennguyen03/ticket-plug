import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Container, Typography } from '@mui/material'

function Home() {
  return (
    <> 
      <Container>
        <Typography variant="h1">Welcome to Ticket Plug</Typography>
      </Container>
    </>
  )
}

export default Home
