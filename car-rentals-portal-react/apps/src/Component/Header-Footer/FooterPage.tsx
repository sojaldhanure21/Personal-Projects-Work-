import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../Styles/Styles Web/SCSS/FooterPage.css'
import FooterPageMobile from '../../Mobile/FooterPageMobile';

function FooterPage() {
    const navigate = useNavigate();
    const windowSize: any = useRef([window.innerWidth, window.innerHeight])

    const moveToaboutUs = () => {
        navigate("/aboutus")
    }

    return (
        windowSize.current[0] > 768 ?
        (<>
            <div className='footer-main'>
                <div className='footer-box'>
                    <div className='footer-box head-section-footer'  >
                        <span className='head-section-footer'>NEED HELP ?</span>
                        <span className='head-section-footer'>COMPANY</span>
                        <span className='head-section-footer'>SUPPORT</span>
                        <span className='head-section-footer'>SOCIAL MEDIA</span>
                    </div>

                    <div className='footer-box down-section'>
                        <div className='down-section footer-left'>
                            <div className='footer-left call-us'>
                                <small className='call-us'>Call US</small>
                                <span className='call-us'>+1(403)774-1299</span>
                            </div>
                            <div className='footer-left email-us'>
                                <small className='email-us'>Email US</small>
                                <span className='email-us'>info@ikanopi.com</span>
                                <span className='email-us'>support@ikanopi.com</span>
                            </div>

                        </div>
                        <div className='down-section footer-mid'>
                            <div className='footer-mid company-section'>
                                <small className='company-section' onClick={moveToaboutUs}>About Us</small>
                                <a href="https://www.ikanopii.com/news" className='company-section'>Community Blog</a>
                                <a href="https://kanopii.bamboohr.com/jobs/?source=linkedin" className='company-section'>Work with us</a>
                            </div>
                        </div>
                        <div className='down-section footer-mid-right'>
                            <div className='footer-mid support-section'>
                                <a href="https://helpdesk.kanopiistay.com/" className='support-section'>Help Desk</a>
                                <a href="https://ikanopii.com/public/page/terms-and-condition" className='support-section'>Terms and conditions</a>
                                <a href="https://www.techspian.com/contact-us/" className='support-section'>Contact</a>
                                <a href="https://ikanopii.com/page/privacy-policy" className='support-section'>Privacy Policy</a>
                            </div>
                        </div>


                        <div className='down-section footer-right'>
                            <div className='footer-right follow-us'>
                                <small className='follow-us' >Follow US</small><br />
                                <a href="https://www.facebook.com/kanopiistay" className='follow-us'><img src='brandico_facebook.svg' /></a>
                                <a href="https://www.youtube.com/watch?v=quIYVDVU-kY" className='follow-us'><img src='design_youtube.svg' /></a>
                                <a href="https://www.instagram.com/kanopiistay" className='follow-us'><img src='akar-icons_instagram-fill.svg' /></a>
                            </div>
                            <div className='footer-right download-ourapp'>
                                <small className='download-ourapp'>Download our App</small><br />
                                <a href="https://apps.apple.com/us/app/kanopii-stay/id1579264170" className='download-ourapp'><img src='ci_apple.svg' /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.kanopii.www&pli=1" className='download-ourapp'><img src='fa_android.svg' /></a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>) : <FooterPageMobile />

    )
}
export default FooterPage