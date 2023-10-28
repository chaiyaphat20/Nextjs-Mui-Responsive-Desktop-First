'use client'
import { Theme, Typography } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Typography variant="h1" sx={(theme:Theme)=>({
        backgroundColor: 'red',
        [theme.breakpoints.down("desktop")]: {
          backgroundColor: 'green',
        },
        [theme.breakpoints.down("laptop")]: {
          backgroundColor: 'yellow',
        },
        [theme.breakpoints.down("tablet")]: {
          backgroundColor: 'pink',
        }
        
      })}>Responsive h1 Desktop First</Typography>
      <Typography variant="h2" >Responsive h2 Desktop First</Typography>
      <Typography variant="h3" >Responsive h3 Desktop First</Typography>
      <Typography variant="h4" >Responsive h4 Desktop First</Typography>
    </div>
  )
}
