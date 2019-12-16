import '../sass/main.scss'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Index(params) {
    return (
        <React.Fragment>
            <header>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid container item className="contact_header">
                            <Grid item xs={6}>
                                <ul>
                                    <li><a>To help : 0000-1111-2222</a></li>
                                    <li>|</li>
                                    <li><a>Email : contact@email.com</a></li>
                                </ul>
                            </Grid>
                            <Grid item xs={6}>
                                sosmed
                            </Grid>
                        </Grid>
                        <Grid container item className="nav_header">
                            <Grid item container xs={6} direction="row" justify="flex-start" alignItems="center">
                                <div className="nav_header-logo">
                                    <h3 style={{color: 'white',fontSize: '3rem'}}>MediCare</h3>
                                </div>
                            </Grid>
                            <Grid item container xs={6} direction="row" justify="flex-end" alignItems="center">
                                <div className="nav_header-nav">
                                    <ul>
                                        <li><a>Home</a></li>
                                        <li><a>About</a></li>
                                        <li><a>Contact</a></li>
                                    </ul>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item direction="column" className="tag_header">
                            <div className="tag_header-text">
                                <h1>We Provide The Best</h1>
                                <br/>
                                <h1>Medical Services</h1>
                                <br/>
                                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit <br/>amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet amet <br/>lorem ipsum dolor sit amet lorem ipsum dolor sit amet amet lorem ipsum <br/>dolor sit amet lorem ipsum dolor sit amet </p>
                                <br/>
                                <a>VIEW SERVICES</a>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </header>
            <main>
                <div className="section_one">
                    <Container maxWidth="lg">
                        <Grid container className="booking_information">
                            <Grid item xs={12} lg={6}>
                                <h3>Need a Doctor for Check-Up</h3>
                                <h3>Just Make An Appointment</h3>
                                <a>BOOK AN APPOINTMENT</a>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <h3>Opening Hours</h3>
                                <table class="schedule">
                                    <tr>
                                        <td class="tg-0lax">Monday</td>
                                        <td class="tg-0lax">08:00 AM - 08:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-0lax">Tuesday</td>
                                        <td class="tg-0lax">08:00 AM - 08:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-0lax">Wednesday</td>
                                        <td class="tg-0lax">08:00 AM - 08:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-0lax">Thursday</td>
                                        <td class="tg-0lax">08:00 AM - 08:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-0lax">Friday</td>
                                        <td class="tg-0lax">08:00 AM - 08:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-0lax">Saturday-Sunday</td>
                                        <td class="tg-0lax">08:00 AM - 08:00 PM</td>
                                    </tr>
                                </table>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className="section_two">
                    <Container maxWidth="lg">
                        <Grid container item spacing={2}>
                            <Grid item xs={4}>
                                <div className="box">
                                    <img src="/images/stethoscope.png"/>
                                    <h3>HEALTH SPECIALIST</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="box">
                                    <img src="/images/doctor.png"/>
                                    <h3>MEDICAL EXPERIENCE</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className="box">
                                    <img src="/images/heart.png"/>
                                    <h3>EMERGENCY HELP</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className="section_three">
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid container item xs={12} direction="row" justify="center" className="title">
                                <h2>WELCOME TO MEDICARE</h2>
                            </Grid>
                            <Grid container item xs={12} className="desc">
                                <Grid item xs={6}>
                                    <h3>Lorem Ipsum is simply dummy</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <a>READ MORE</a>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="desc-img_wrapper">
                                        <div className="desc-img_wrapper-img1">
                                            <img src="https://source.unsplash.com/200x400" width="100%" height="100%"/>
                                        </div>
                                        <div className="desc-img_wrapper-img2">
                                            <img src="https://source.unsplash.com/200x401" width="100%" height="100%"/>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className="section_four">
                    <Container maxWidth="lg">
                        <Grid container spacing="2">
                            <Grid item xs={3} className="title">
                                <h2>OUR DOCTORS</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                <a>VIEW MORE</a>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="box-img">
                                    <img src="https://source.unsplash.com/random" width="100%" height="100%"/>
                                </div>
                                <div className="box-desc">
                                    <h3>DR. JULIA JAMESON</h3>
                                    <p>Throat Specialist</p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="box-img">
                                    <img src="https://source.unsplash.com/random" width="100%" height="100%"/>
                                </div>
                                <div className="box-desc">
                                    <h3>DR. JULIA JAMESON</h3>
                                    <p>Throat Specialist</p>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="box-img">
                                    <img src="https://source.unsplash.com/random" width="100%" height="100%"/>
                                </div>
                                <div className="box-desc">
                                    <h3>DR. JULIA JAMESON</h3>
                                    <p>Throat Specialist</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className="section_five">
                    <Container maxWidth="lg">
                        <Grid container >
                            <Grid container item xs={12} direction="row" justify="center" className="title">
                                <h2>EVERYTHING YOU NEED</h2>
                            </Grid>
                            <Grid container item spacing="2" className="box_wrapper">
                                <Grid item xs={12} md={3}>
                                    <div className="box_wrapper-el">
                                        <div className="box_wrapper-el--desc">
                                            <div className="img_wrapper">
                                                <img src="/images/contact.png" />
                                            </div>
                                            <h3>CONTACT FORM</h3>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </div>
                                        <div className="box_wrapper-el--view">
                                            <a>READ MORE</a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <div className="box_wrapper-el">
                                        <div className="box_wrapper-el--desc">
                                            <div className="img_wrapper">
                                                <img src="/images/support.png" />
                                            </div>
                                            <h3>SUPPORT</h3>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </div>
                                        <div className="box_wrapper-el--view">
                                            <a>READ MORE</a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <div className="box_wrapper-el">
                                        <div className="box_wrapper-el--desc">
                                            <div className="img_wrapper">
                                                <img src="/images/cal.png" />
                                            </div>
                                            <h3>APPOINTMENT</h3>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </div>
                                        <div className="box_wrapper-el--view">
                                            <a>READ MORE</a>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <div className="box_wrapper-el">
                                        <div className="box_wrapper-el--desc">
                                            <div className="img_wrapper">
                                                <img src="/images/faq.png" />
                                            </div>
                                            <h3>FAQs</h3>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </div>
                                        <div className="box_wrapper-el--view">
                                            <a>READ MORE</a>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className="section_six">
                    <Container maxWidth="md" spacing="2">
                        <Grid container item xs={12} direction="row" justify="center" className="title">
                            <h2>BOOKING AN APPOINTMENT</h2>
                        </Grid>
                        <Grid container item className="form_booking">
                            <form>
                                <Grid item container justify="center">
                                    <Grid item xs={12} md={5} className="form-grid">
                                        <TextField
                                            id="outlined-name"
                                            label="Select Departments"
                                            // value={name}
                                            // onChange={handleChange}
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Your Name"
                                            // value={name}
                                            // onChange={handleChange}
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Your Email"
                                            // value={name}
                                            // onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={5} className="form-grid">
                                        <TextField
                                            id="outlined-name"
                                            label="Select Doctors"
                                            // value={name}
                                            // onChange={handleChange}
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="Phone number"
                                            // value={name}
                                            // onChange={handleChange}
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="outlined-name"
                                            label="DD / MM / YYYY"
                                            // value={name}
                                            // onChange={handleChange}
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item container xs={12} justify="center">
                                        <Button variant="contained" color="primary">Book an appoinment</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Container>
                </div>
                <div className="section_seven">
                    <Container>
                        <Grid container item xs={12} direction="row" justify="center" className="title">
                            <h2>OUR HAPPY CLIENTS SAY</h2>
                        </Grid>
                        <Grid container item spacing="3">
                            <Grid item xs={12} md={4}>
                                <div className="box_desc">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                </div>
                                <Grid container alignItems="center">
                                    <div className="box_thumbnail"></div>
                                    <div className="client_info">
                                        <p>Faikar</p>
                                        <p>Presiden</p>
                                    </div>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="box_desc">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                </div>
                                <Grid container alignItems="center">
                                    <div className="box_thumbnail"></div>
                                    <div className="client_info">
                                        <p>Faikar</p>
                                        <p>Presiden</p>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <div className="box_desc">
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                                </div>
                                <Grid container alignItems="center">
                                    <div className="box_thumbnail"></div>
                                    <div className="client_info">
                                        <p>Faikar</p>
                                        <p>Presiden</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer>
                <Container maxWidth="lg">
                    <Grid container spacing="5">
                        <Grid item xs={4}>
                            <h2>MEDICARE</h2>
                            <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet </p>
                        </Grid>
                        <Grid container item xs={4} spacing="2">
                            <Grid item xs={6}>
                                <h3>NAVIGATION</h3>
                                <ul>
                                    <li><a>Home</a></li>
                                    <li><a>About</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </Grid>
                            <Grid item xs={6}>
                                <h3>SOCIAL LINKS</h3>
                                <ul>
                                    <li><a>Instagram</a></li>
                                    <li><a>Twitter</a></li>
                                    <li><a>Facebook</a></li>
                                </ul>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>3</Grid>
                    </Grid>
                </Container>
            </footer>
            <div className="copyright">
                <Container maxWidth="lg">
                    <Grid container spacing="5">
                        <Grid item xs={4}>
                            <p>Copyright 2020. All rights reserved by MediCare</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Index


