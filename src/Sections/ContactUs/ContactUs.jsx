import { MDBBtn } from 'mdb-react-ui-kit'
import { SectionHeader, SectionWrapper } from '../../Components'
import './ContactUs.css'




import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="ContactUs-Section" id='ContactUs'>
                <SectionWrapper>
                    <div className="contactHeader">
                    <SectionHeader>
                        تواصل معنا
                    </SectionHeader>
                    <p className='mb-5' style={{fontSize:"14px"}}>
                        يمكنك التواصل معنا عبر ارسال رسالة علي الميل الخاص بنا او من خلال احدي
                        الارقام التالية او يمكنك زيارتنا في مكان التدريب بالعنوان التالي .
                    </p>
                    </div>
                    <div className="content">
                        <form 
                        className='contactForm' 
                        action="mailto:tarekomar052@gmail.com" 
                        method="post" 
                        encType="text/plain" 
                        >
                            <input autoComplete='on' className="main-input" type="text" name="name" placeholder="اسمك" />
                            <input autoComplete='on' className="main-input" type="email" name="mail" placeholder="البريد الالكتروني او رقم الهاتف" />
                            <textarea className="main-input" name="message" placeholder="الرسالة الخاصة بك" style={{minHeight:"150px"}}/>
                            <MDBBtn autoComplete='on' tag='input' type='submit' value='ارسال' size='lg' color='warning'  />
                        </form>
                        <div className="info">
                            <div className='info-bx'>
                                <h5 className=''>
                                    ارقام للتواصل
                                </h5>
                                <div style={{direction:"ltr"}}>
                                    <span className="phone" style={{float:"right", fontSize:"14px"}}>+00 123.456.789</span>
                                    <br />
                                    <span className="phone" style={{float:"right", fontSize:"14px"}}>+00 123.456.789</span>
                                </div>
                            </div>
                            <div className='info-bx'>
                                <h5>اين نحن</h5>
                                <address style={{ fontSize:"14px"}}>
                                    نادي جويل <span style={{fontSize:"12px", color:"var(--color-lightDark)"}}> ( توليب سابقا ) </span>
                                    <br />
                                    زهراء ، مدينة نصر
                                    <br />
                                    القاهرة
                                </address>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </>
    )
}

export default ContactUs