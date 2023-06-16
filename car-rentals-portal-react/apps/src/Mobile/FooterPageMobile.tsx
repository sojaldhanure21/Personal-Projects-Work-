import React from 'react'
import '../Styles/Styles Mobile/SCSS/FooterPageMobile.css'
function FooterPageMobile() {
    return (<>
        <div className='footer-main'>
            <div className='footer-main footer-box'>
                <div className='footer-box footer-left'>
                    <span className='footer-left'>NEED HELP ?</span>
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
                <div className='footer-box footer-right'>
                    <span className='footer-right'>SOCIAL MEDIA</span>
                    <div className='footer-right follow-us'>
                        <span className='follow-us' >Follow US</span><br />
                        <a href="https://www.facebook.com/kanopiistay" className='follow-us'><img src='brandico_facebook.svg' /></a>
                        <a href="https://www.youtube.com/watch?v=quIYVDVU-kY" className='follow-us'><img src='design_youtube.svg' /></a>
                        <a href="https://www.instagram.com/kanopiistay" className='follow-us'><img src='akar-icons_instagram-fill.svg' /></a>
                    </div>
                    <div className='footer-right download-ourapp'>
                        <span className='download-ourapp'>Download our App</span><br />
                        <a href="https://apps.apple.com/us/app/kanopii-stay/id1579264170" className='download-ourapp'><img src='ci_apple.svg' /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.kanopii.www&pli=1" className='download-ourapp'><img src='fa_android.svg' /></a>
                    </div>

                </div>
                <div className='footer-box footer-mid'>
                    <div className='footer-mid company-details' >
                        <span className='company-details'>COMPANY</span>
                        <a href="https://www.ikanopii.com/page/message-from-the-ceo" className='company-details'>About Us</a>
                        <a href="https://www.ikanopii.com/news" className='company-details'>Community Blog</a>
                        <a href="https://kanopii.bamboohr.com/jobs/?source=linkedin" className='company-details'>Work with us</a>
                    </div>
                    <div className='footer-mid support'>
                        <span className='support'>SUPPORT</span>
                        <a href="https://helpdesk.kanopiistay.com/" className='support'>Help Desk</a>
                        <a href="https://ikanopii.com/public/page/terms-and-condition" className='support'>Terms and conditions</a>
                        <a href="https://ikanopii.com/contact" className='support'>Contact</a>
                        <a href="https://ikanopii.com/page/privacy-policy" className='support'>Privacy Policy</a>
                    </div>
                </div>
            </div>

        </div>
    </>

    )
}
export default FooterPageMobile