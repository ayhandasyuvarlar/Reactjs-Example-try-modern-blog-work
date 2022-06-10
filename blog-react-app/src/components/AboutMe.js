import img from "../img/13123.jpg";
import FooterBox from "./FooterBox";
import HobiesBox from "./HobiesBox";
import "./TextAnime.js";

const ImageLink = [
  {
    img: "https://cdn0.iconfinder.com/data/icons/logos-21/40/javascript-128.png",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-128.png",
  },
  {
    img: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-256.png",
  },
  {
    img: "https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-128.png",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-128.png",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/256_Php_logo-128.png",
  },

  {
    img: "https://cdn2.iconfinder.com/data/icons/communication-141/48/internet-128.png",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-128.png",
  },
  {
    img: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mysql-128.png",
  },
];

const AboutMe = () => {
  return (
    <div style={{overflow:"hidden"}}>
    <div className="contentabout">
      <div className="aboutcontent">
        <img src={img} alt="" />
        <div className="about-textbox">
          <div class="animation_text">
            <h1>
              Hello , Web
              <span
                class="typewrite"
                data-period="2000"
                data-words='[" Developer.", " Expert.", " Desinger."]'
              ></span>
            </h1>
          </div>
          <div className="about">
            Hello, I'm Ayhan. I am a web designer and developer living in
            İstanbul, Turkey. During the day I work as a developer at a local
            agency and in the evenings I work on freelance projects and use the
            time to create my own products. I spent my free time reading
            articles, books, exploring, learning and writing poems. I'm
            currently experimenting with machine learning and artificial
            intelligence as well. I love learning and exploring new areas about
            software.
          </div>
        </div>
      </div>
      <div className="skillsbox">
        <h1>My Skills</h1>
        <div className="skillsImgBox">
          {ImageLink.map((Image) => (
            <div className="skillsimg">
              <div style={{ width: "25%" }}>
                <img src={Image.img}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hobiesbox">
          <h1>My Hobies</h1>
          <HobiesBox></HobiesBox>
      </div>
    </div>
    <FooterBox ></FooterBox>
    </div>
  );
};

export default AboutMe;




 /* <iframe
              style={{borderRadius:"12px",width:"40vh",height:"380px"}}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5H8QSpChffy?utm_source=generator"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>  */