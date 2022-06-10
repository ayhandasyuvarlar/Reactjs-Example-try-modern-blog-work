import icon1 from "../img/291716_github_logo_social network_social_icon.svg";
import icon5 from '../img/1298747_instagram_brand_logo_social media_icon.svg'
import icon3 from "../img/317727_facebook_social media_social_icon.svg";
import icon2 from "../img/4362961_linkedin_social media_icon.svg";
import icon4 from "../img/2613276_company_google_hardware and software_internet_search_icon.svg";
import { FaFacebookSquare,FaInstagram ,FaGooglePlusG,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";

const FooterBox = () => {
  return (
    <div className="FooterBox">
     <div style={{color:"white"}}>
     Tüm Hakları Saklıdır <span style={{color:"orangered"}}>Ayhan Daşyuvarlar</span>
     </div>
      <div className="SosialList">
        <ul>
          <li>
            <a href="#">
              <FaFacebookSquare/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub/>
            </a>
          </li>
          <li>
            <a href="#">
                <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="GmailBox"> 
          <span>
              <a className="a" href="#" ><FaGooglePlusG/></a>
             <a href=""><span className="span">ayhandasyuvarlar3@gmail.com</span></a>
          </span>
      </div>
    </div>
  );
};

export default FooterBox;
