import Image from 'next/image'
import styles from './page.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Typography variant="h1">Responsive h1 Desktop First</Typography>
      <Typography variant="h2" >Responsive h2 Desktop First</Typography>
      <Typography variant="h3" >Responsive h3 Desktop First</Typography>
    </div>
  )
}
