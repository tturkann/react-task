import  "./style1.scss";
import icon3 from '../../../assets/images/wraper.png'
import icon4 from '../../../assets/images/wraper12.png'
import icon5 from '../../../assets/images/wraper12-1.png'

import FooterNavMenu from "./components/FooterNavMenu/FooterNavMenu";

const footerData = [
   {
      text: 'Home',
   },
   {
      text: 'Contact',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
   {
      text: 'Home',
   },
]

export const Footer = () => {
return (
    <footer>
    <div className="wraper12">
       <div className="wraper-12-1">
    <img className="img-12" src={icon4}/></div>
  
    
    <div className="img-12-2"> 
       <img className="img-12-3" src={icon5}/></div>
      <div className="nav-img">
          <nav className="dot-12"> 
             <h1 className="explore">Explore</h1>
             <ul><img src={icon3}/></ul>
             <ul><img src={icon3}/></ul>
             <ul><img src={icon3}/></ul>
             <ul><img src={icon3}/></ul>
             <ul><img src={icon3}/></ul>
             <ul><img src={icon3}/></ul>
         </nav>
       
         <nav className="home"> 
         <li>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Services</ul>
          <ul>Appointments</ul>
          <ul>Blog</ul>
          <ul>Contact Us</ul>
    
    
         </li>
         </nav>
         </div>
       
         <div className="nav-image-1">
          <nav className="dot-12-1"> 
             <h1 className="explore">Utiliy Pages</h1>
             <ul><img src={icon3}/></ul>
             {footerData.map(item => (
               <FooterNavMenu text={item.text} /> 
             ))}
         </nav>
         <nav className="utility"> 
          <li>
           <ul> Start here</ul>
           <ul>Style guide</ul>
           <ul>404 not found</ul>
           <ul>Password protected</ul>
           <ul>Licenses</ul>
           <ul>Changelog</ul>
     
     
          </li>
          </nav>
         </div>
    <div className="nav-img-2">
       <div className="right-end">
          <h1 className="Right-end-h1">Keep in touch</h1>
          <p className="end">Address:</p>
          <p className="end">Mail :</p>
          <p className="end">Phone :</p>
       </div>
    
       <div className="right-end-2">
          <p className="end2">24A Kingston St, Los Vegas NC 28202, USA.</p>
          <p className="end2">support@doctors.com</p>
          <p className="end2">(+22) 123 - 4567 - 900</p>
       </div>
    
    </div>
    <hr/>
    </div>
    </footer>


);
};
export default Footer;
   
      



