import React from 'react';
import './contact.css';
const Contact = () => {
    const handleSubmit = (event) => 
      {
        event.preventDefault();
        alert("Message has been sent to given email id ");
      }
return (

      
<><section className="contact_us">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                <form className="contact_field" onSubmit={()=>{window.alert("Thank you ! Message has been received .")}}>
                                        <h3>Contact Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input type="text" className="form-control form-group" placeholder="Name" required />
                                        <input type="text" className="form-control form-group" placeholder="Email" required/>
                                        <textarea className="form-control form-group" placeholder="Message" required></textarea>
                                        <button className="contact_form_submit"  type='submit'>Send</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="right_conatct_social_icon d-flex align-items-end">
                                   <div className="socil_item_inner d-flex">
                                      <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec">
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-headset"></i>
                                <span>+91 8009 054294</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-envelope-open-text"></i>
                                <span>info@sprucetravels.com</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                                <i className="fas fa-map-marked-alt"></i>
                                <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE etc....</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
</>
// <form onSubmit={handleSubmit} classNameName="container contact">
//     <div classNameName="row">
//         <div classNameName="col-md-8 col-12 mx-auto">
//             <div classNameName="card shadow-lg border-0 p-4">
//                 <h1 classNameName="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
//                 <div classNameName="form-group my-5">
//                     <div classNameName="row">
//                         <div classNameName="col-md-6 col-12 mx-auto my-2">
//                             <input type="text" classNameName="form-control-lg" placeholder="First Name" required />
//                         </div>
//                         <div classNameName="col-md-6 col-12 mx-auto my-2">
//                             <input type="text" classNameName="form-control-lg" placeholder="last Name" required />
//                         </div>
//                     </div>
//                 </div>
//                 <div classNameName="form-group mb-5">
//                     <div classNameName="row">
//                         <div classNameName="col-md-6 col-12 mx-auto my-2">
//                             <input type="email" classNameName="form-control-lg" placeholder="Email Address" required />
//                         </div>
//                         <div classNameName="col-md-6 col-12 mx-auto my-2">
//                             <input type="tel" classNameName="form-control-lg" placeholder="Phone no." required />
//                         </div>
//                     </div>
//                 </div>
//                 <div classNameName="row">
//                     <div classNameName="col-11">
//                         <textarea classNameName="form-control" row="20" placeholder="Your message" required></textarea>
//                     </div>
//                 </div>
//                 <div classNameName="mt-5 col-md-6 col-12 mx-auto">
//                     <button classNameName="btn btn-outline-dark btn-lg btn-block" type="submit" >Send Message</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </form>



)
}
export default Contact