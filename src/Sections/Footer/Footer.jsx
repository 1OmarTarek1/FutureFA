import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import LogoImg from '../../Assets/Images/logoFoot.png'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';




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
                <a href='#' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='#' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href='#' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                </a>
                <a href='#' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                </a>
                <a href='#' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
                <a href='#' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                </a>
                </div>
            </section>

            <section className='footSecCent'>
                <MDBContainer color="dark" className='footerCont text-center text-md-start mt-5'>
                    <MDBRow className='pcFooter mt-3'>
                        <MDBCol md="4" lg="4" xl="3" className='footFont mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>
                            <HashLink to='/' className='text-muted'>
                                <span className="logoWrapper me-2">
                                    <img src={LogoImg} alt="logo" width={30 }/>
                                </span>
                                Future Academy
                            </HashLink>
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='footFont mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
                        <p>
                            <HashLink to={"/"} className='text-reset'>
                                Home
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to={"/News"} className='text-reset'>
                                News
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to={"/Training"} className='text-reset'>
                                Training
                            </HashLink>
                        </p>
                        <p>
                            <HashLink to={"/Else/About"} className='text-reset'>
                                About Us
                            </HashLink>
                        </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='footFont mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>links</h6>

                            <p>
                                <HashLink to={"/Training#TrainingTime"} className='text-reset'>
                                    Training Time
                                </HashLink>
                            </p>

                            <p>
                                <HashLink to={"/#SomeNews"} className='text-reset'>
                                    Important News
                                </HashLink>
                            </p>

                            <p>
                                <HashLink to={"/Contact#SubscribePlans"} className='text-reset'>
                                    Subscribe Plans
                                </HashLink>
                            </p>

                            <p>
                                <HashLink to={"/#Teams"} className='text-reset'>
                                    Teams
                                </HashLink>
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
                                    <HashLink to={""} className='text-reset'>
                                        Home
                                    </HashLink>
                                </p>
                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        News
                                    </HashLink>
                                </p>
                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        Training
                                    </HashLink>
                                </p>
                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        About Us
                                    </HashLink>
                                </p>
                            </MDBCol>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle='Links'>
                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        Training Time
                                    </HashLink>
                                </p>

                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        Important News
                                    </HashLink>
                                </p>

                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        Subscribe Plans
                                    </HashLink>
                                </p>

                                <p>
                                    <HashLink to={""} className='text-reset'>
                                        Teams
                                    </HashLink>
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
                © 2021 Copyright: <a className='text-reset fw-bold' href='#!'>
                Programer.com
                </a> - Created by: <strong className='text-reset fw-bold'>Omar Tarek</strong>
            </div>
        </MDBFooter>
        </div>
        </>
    )
}

export default Footer