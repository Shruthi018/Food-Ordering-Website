import React from 'react';
import Layout from '../components/Layout/Layout';
import { Typography, Card, CardContent, CardMedia, TextField, Button } from '@mui/material';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <Card sx={{ height: '80vh', display: 'flex', flexDirection: 'row' }}>
          <CardMedia
            component="img"
            alt="Contact Us Image"
            image="https://www.netsolutions.com/insights/wp-content/uploads/2021/11/essential-feature-of-building-an-on-demand-food-ordering-app.jpg"
            className="card-media"
          />
          <CardContent className="card-content" sx={{ backgroundColor: '#333', color: 'aliceblue', padding: '20px' }}>
            <Typography variant="h4" component="div" gutterBottom sx={{ color: 'goldenrod'}}>
              <center>Contact Us</center>
            </Typography>
            <Typography variant="body1" paragraph>
              We'd love to hear from you! Please fill out the form below to get in touch with us.
            </Typography>
            <Typography variant="body1" paragraph>
              Call us: <a href="tel:+1234567890">+1234567890</a>
            </Typography>
            <form className="contact-form">
              <TextField label="Name" variant="filled" fullWidth margin="normal" sx={{ input: { color: 'aliceblue' }, label: { color: 'aliceblue' } }} />
              <TextField label="Email" variant="filled" fullWidth margin="normal" sx={{ input: { color: 'aliceblue' }, label: { color: 'aliceblue' } }} />
              <TextField label="Message" variant="filled" multiline rows={4} fullWidth margin="normal" sx={{ input: { color: 'aliceblue' }, label: { color: 'aliceblue' } }} />
              <Button variant="contained" color="primary" type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default Contact;
