import Image from 'next/image'
import styles from './page.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Typography variant="h1" sx={{backgroundColor:'mistyrose'}}>Responsive h1 Desktop First</Typography>
    </div>
  )
}
