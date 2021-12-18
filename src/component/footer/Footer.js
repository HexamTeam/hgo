import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button, TextField } from "@mui/material";
import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    Rw,
    } from "./FooterStyle";
import { display, height } from '@mui/system';


const Footer = () => {
    return(
        <footer>
            <Box>
                <center>
                <div style={{
                    borderRadius:"25px",
                    backgroundColor:"#f2f1f3",
                    paddingTop:"70px",
                    width:"1200px",
                    height:"200px"

                }}>
            
                <h1 style={{color:"#6696969",
                            textAlign: "center",
                            marginTop:"-50px"}}>
                                Travel More, Travel Better

                            </h1>
                
                <h3 style={{color:"#6696969",
                            textAlign:'center',
                            marginTop:"-20px"}}>
                                Sign up for travel ideas and tips in your mailbox
                            </h3>
                
                <center>
                <div style={{
                    justifyContent:'center',
                    alignItems:'center',
                    display:'grid',
                    paddingTop:"30px"}} >
                    <form style={{textAlign:'center'}}>
                        
                        <Rw className="mx-0">
                        <TextField
                        
                        name="PartyName"
                        label="Your email address"/>
                        
                        <Button type="button" class="btn btn-outline-success">Sign Up</Button>
                        </Rw>
                        
                    </form>
                </div>
                </center>
                
                </div>
                </center>
            
                
                <hr/>
            
                <Container>
                    <Row>
                    <Column>
                        <Heading>ABOUT</Heading>
                        <FooterLink href="#">How HotelGo works</FooterLink>
                        <FooterLink href="#">Newsroom</FooterLink>
                        <FooterLink href="#">Investors</FooterLink>
                        <FooterLink href="#">HotelGo Plus</FooterLink>
                        <FooterLink href="#">HotelGo Luxe</FooterLink>
                        <FooterLink href="#">Hotel Tonight</FooterLink>
                        <FooterLink href="#">HotelGo for Work</FooterLink>
                        <FooterLink href="#">Made possible by Hosts</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Founders' Letter</FooterLink>
                    </Column>
                    
                    <Column>
                        <Heading>COMMUNITY</Heading>
                        <FooterLink href="#">Diversity and Belonging</FooterLink>
                        <FooterLink href="#">Accessibility</FooterLink>
                        <FooterLink href="#">HotelGo Associates</FooterLink>
                        <FooterLink href="#">Frontline Stays</FooterLink>
                        <FooterLink href="#">Guest Referrals</FooterLink>
                        <FooterLink href="#">HotelGo.com</FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>HOST</Heading>
                        <FooterLink href="#">Host your home</FooterLink>
                        <FooterLink href="#">Host an Online Experience</FooterLink>
                        <FooterLink href="#">Host an Experience</FooterLink>
                        <FooterLink href="#">Responsible hosting</FooterLink>
                        <FooterLink href="#">Resourse Center</FooterLink>
                        <FooterLink href="#">Community Center</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Support</Heading>
                        <FooterLink href="#">Our COVID-19 Response</FooterLink>
                        <FooterLink href="#">Help Center</FooterLink>
                        <FooterLink href="#">Cancellation options</FooterLink>
                        <FooterLink href="#">Neighbourhood Support</FooterLink>
                        <FooterLink href="#">Trust and Safety</FooterLink>
                        
                    </Column>
                </Row>
                <Row>
                    <Column></Column>
                    <Column></Column>
                    <Column></Column>
                    <Column>
                        {/* <Heading>Social Media</Heading> */}
                        <div className="social">
                        <FooterLink href="#">
                        <i className="fab fa-facebook-f">
                            <span style={{ marginLeft: "10px" }}>
                            Facebook
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-instagram">
                            <span style={{ marginLeft: "10px" }}>
                            Instagram
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-twitter">
                            <span style={{ marginLeft: "10px" }}>
                            Twitter
                            </span>
                        </i>
                        </FooterLink>
                        <FooterLink href="#">
                        <i className="fab fa-youtube">
                            <span style={{ marginLeft: "10px" }}>
                            Youtube
                            </span>
                        </i>
                        </FooterLink>
                        </div>
                        </Column>
                    </Row>
                </Container>
                <hr/>
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} HotelGo. All rights reserved. Copyright (221-2030) -HotelGo.com <sup>TM</sup>
                </p>
            </Box>
        </footer>
    )
}

export default Footer