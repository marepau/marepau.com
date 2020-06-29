import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import albers from './assets/albers.jpg'
import { bounceInRight, bounceInLeft } from 'react-animations'
// import Typist from 'react-typist'

const fadeAnimation = keyframes`${bounceInRight}`
const fadeAnimationLeft = keyframes`${bounceInLeft}`

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const LeftFadeDiv = styled.div`
  animation: 1s ${fadeAnimationLeft}
`;

const PageContainer = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  min-height: 85vh;
  height: 100%
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: -1;
  top: 0px;
`;

const Title = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Archivo Black', sans-serif;
  font-weight: 400;
  align-text: center;
  font-size: 24px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormContainerTop = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
`;

const FormContainerBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 10px;
`;

const FormLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  padding: 10px;
`;

const FormInput = styled.input`
  padding: 15px;
  min-width: 300px;
  size: 10;
  color: black;
  background: ghostwhite;
  border: none;
  border-radius: 3px;
`;
const FormTextArea = styled.textarea`
  padding: 15px;
  min-width: 300px;
  rows: 5;
  color: black;
  background: ghostwhite;
  border: none;
  border-radius: 3px;
`;

const FormLabel = styled.label`
  font-family: 'Open Sans',sans-serif;
  font-weight: 600;
  font-size: 12px;
`;

const Button = styled.button`
  background-color: #B2DFB2;
  border: none;
  color: dark grey;
  text-align: center;
  display: flex;
  align-self: center;
  text-decoration: none;
  display: block;
  font-family: 'Open Sans',sans-serif;
  font-size: 14px;
  max-width: 100px;
  margin: 50px;
`;

function ContactFormMobile(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [buttonText, setButtonText] = useState('Send Message')
  const [sent, setSent] = useState(false)


  const handleChange = (e) => {
    e.preventDefault()

    if(e.target.id === "name"){
      setName(e.target.value)
    }
    if(e.target.id === "email"){
      setEmail(e.target.value)
    }
    if(e.target.id === "message"){
      setMessage(e.target.value)
    }
    if(sent === true && e.target.id === "name"){
      setName(e.target.value)
      setSent(false)
      setButtonText('Send Message')
    }
    if(sent === true && e.target.id === "email"){
      setEmail(e.target.value)
      setSent(false)
      setButtonText('Send Message')
    }
    if(sent === true && e.target.id === "message"){
      setMessage(e.target.value)
      setSent(false)
      setButtonText('Send Message')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setButtonText('...Sending Message')

    const dataToSubmit = {
      name,
      email,
      message
    }

    axios.post('api/sendMail', dataToSubmit)
    .then(res => {
      setSent(true)
      setName('')
      setEmail('')
      setMessage('')
      setButtonText('Message Sent')
    })
    .catch( () => {
      console.log('message not sent')
    })


  }

  return(
    <PageContainer>
    <LeftFadeDiv>
      <Title>'sup?</Title>
    </LeftFadeDiv>
    <br/>
    <FadeDiv>
    <form id="contact-form" onSubmit={handleSubmit} method="POST">
    <Form>
    <FormContainerTop>
    <FormLineContainer>
        <FormLabel for="name">Name</FormLabel>
        <FormInput type="text" className="form-control" value={name} id="name" onChange={handleChange}/>
    </FormLineContainer>
    <FormLineContainer>
        <FormLabel for="exampleInputEmail1">Email Address</FormLabel>
        <FormInput type="email" className="form-control" value={email}id="email" onChange={handleChange} aria-describedby="emailHelp" />
    </FormLineContainer>
  </FormContainerTop>
  <FormContainerBottom>
    <FormLineContainer>
        <FormLabel for="message">Message</FormLabel>
        <FormTextArea className="form-control" rows="5" value={message} onChange={handleChange} id="message"></FormTextArea>
    </FormLineContainer>
    </FormContainerBottom>
    <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
    {buttonText}
    </Button>
    </Form>
</form>
</FadeDiv>
</PageContainer>
  )
}


export default ContactFormMobile
