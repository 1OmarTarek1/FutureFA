import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import LogoImg from '../../Assets/Images/logoFoot.png'
import './Footer.css'
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <>
        <div className="Footer-Section" style={{direction:'ltr'}}>
        <MDBFooter className='text-center text-lg-start text-muted'>
            <section 
            className='footSecTop d-flex justify-content-center justify-content-lg-between p-4 border-top-gray' >
                <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
                </div>

                <div>
                <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                </a>
                <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                </a>
                <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
                <a href='#!' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                </a>
                </div>
            </section>

            <section className='footSecCent'>
                <MDBContainer color="dark" className='footerCont text-center text-md-start mt-5'>
                    <MDBRow className='pcFooter mt-3'>
                        <MDBCol md="4" lg="4" xl="3" className='footFont mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                            <Link to='/' className='text-muted'>
                                <span className="logoWrapper me-2">
                                    <img src={LogoImg} alt="logo" width={30 }/>
                                </span>
                                Future Academy
                            </Link>
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='footFont mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
                        <p>
                            <a href='#!' className='text-reset'>
                                Home
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                                News
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                                Training
                            </a>
                        </p>
                        <p>
                            <a href='#!' className='text-reset'>
                                About Us
                            </a>
                        </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='footFont mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>links</h6>

                            <p>
                                <a href='#!' className='text-reset'>
                                    Training Time
                                </a>
                            </p>

                            <p>
                                <a href='#!' className='text-reset'>
                                    Important News
                                </a>
                            </p>

                            <p>
                                <a href='#!' className='text-reset'>
                                    Subscribe Plans
                                </a>
                            </p>

                            <p>
                                <a href='#!' className='text-reset'>
                                    Teams
                                </a>
                            </p>

                        </MDBCol>

                        <MDBCol md="3" lg="3" xl="3" className='footFont mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                        <p>
                            <MDBIcon icon="home" className="me-2" />
                            Cairo, NC Jewel C, EG
                        </p>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            info@example.com
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                        </p>
                        <p>
                            <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                        </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBAccordion className='mobileFooter' borderless  initialActive={""}>
                        <MDBAccordionItem collapseId={1} headerTitle='Pages'>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Home
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        News
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Training
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle='Links'>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Training Time
                                    </a>
                                </p>

                                <p>
                                    <a href='#!' className='text-reset'>
                                        Important News
                                    </a>
                                </p>

                                <p>
                                    <a href='#!' className='text-reset'>
                                        Subscribe Plans
                                    </a>
                                </p>

                                <p>
                                    <a href='#!' className='text-reset'>
                                        Teams
                                    </a>
                                </p>
                            </MDBCol>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle='Contact'>
                            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Cairo, NC Jewel C, EG
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info@example.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </MDBContainer>
            </section>

            <div 
            className='footSecBott text-center p-4'>
                © 2021 Copyright: <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                Programer.com
                </a> - Created by: <strong className='text-reset fw-bold'>Omar Tarek</strong>
            </div>
        </MDBFooter>
        </div>
        </>
    )
}

export default Footer