import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Pages/Footer'


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Box className='contact-container'>
                <Box className='contact-info' display='flex' margin={5} padding={5} boxShadow={3}>

                    <Box className='address' width='40%'>

                        <Typography variant='h3'>Santosh Gajurel</Typography>
                        <Typography variant='h5'>Manamaiju Kathmandu</Typography>
                        <Typography className='emails' variant='h6' style={{textOverflow: "hidden"}}>9823677179, santoshgajurel17@gmail.com</Typography>
                    </Box>

                    <Box className='contact-form' width='60%' margin={5} paddingX={5} borderLeft={1}>

                        <TextField id='standard-basic' label="Email" variant='outlined' fullWidth className='mb6'/>
                        <br/>  <br/>
                        <TextField id='standard-basic' label="Sublect" variant='outlined' fullWidth className='mb6'/>
                        <br/>  <br/>
                        <TextField id='standard-basic' label="Massage" variant='outlined'  rosw={5} fullWidth className='mb6'/>
                        <br/>  <br/>

                        <Button color='primary' fullWidth vareient='contained'>Send Massage</Button>
                    </Box>



                </Box>

                
            </Box><br/><br/><br/>
           <Footer/>
            </>
  )
}

export default Contact