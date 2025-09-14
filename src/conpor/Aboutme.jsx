import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Aboutme.css";

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  const [mainText, setMainText] = useState("");
  const [subText, setSubText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const mainTextToType = "Hello, I am Nattpahat Kingjak";
  const subTextToType = "I am a front end developer";
  const descriptionTextToType =
    "I am studying web development. Feel free to enjoy my website.";

  const typingSpeed = 50;
  const descriptionSpeed = 25;

  useEffect(() => {
    let mainIndex = 0;
    const mainInterval = setInterval(() => {
      setMainText((prev) => {
        if (mainIndex < mainTextToType.length) {
          const nextText = prev + mainTextToType[mainIndex];
          mainIndex++;
          return nextText;
        } else {
          clearInterval(mainInterval);
          return prev;
        }
      });
    }, typingSpeed);

    return () => clearInterval(mainInterval);
  }, []);

  useEffect(() => {
    let subIndex = 0;
    const subInterval = setInterval(() => {
      setSubText((prev) => {
        if (subIndex < subTextToType.length) {
          const nextText = prev + subTextToType[subIndex];
          subIndex++;
          return nextText;
        } else {
          clearInterval(subInterval);
          return prev;
        }
      });
    }, typingSpeed);

    return () => clearInterval(subInterval);
  }, []);

  useEffect(() => {
    let descIndex = 0;
    const descInterval = setInterval(() => {
      setDescriptionText((prev) => {
        if (descIndex < descriptionTextToType.length) {
          const nextText = prev + descriptionTextToType[descIndex];
          descIndex++;
          return nextText;
        } else {
          clearInterval(descInterval);
          return prev;
        }
      });
    }, descriptionSpeed);

    return () => clearInterval(descInterval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.from(".section", {
      scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50, 
      duration: 1,
    });
  
    gsap.from(".timeline-item", {
      scrollTrigger: {
        trigger: ".timeline-item",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: -50, 
      duration: 1,
    });
  
    gsap.from(".achievement-card", {
      scrollTrigger: {
        trigger: ".achievement-card",
        start: "top 80%",
        end: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50, 
      duration: 1,
      stagger: 0.2, 
    });
  }, []);
  return (
    <div>
      <div className="landing-container">
        <div className="text-section">
          <h1 className="main-heading">{mainText}</h1>
          <h2 className="sub-heading">{subText}</h2>
          <p className="description">{descriptionText}</p>
        </div>

        <div className={`image-container ${imageLoaded ? "loaded" : ""}`}>
          <img
            src="https://i.imgur.com/gwUlXLW.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      <div className="about-section section">
        <h1 className="About">เกี่ยวกับฉัน</h1>
        <div className="video-section">
          <video autoPlay muted loop className="background-video">
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <img
              src="https://img2.pic.in.th/pic/bigbossno.md.png"
              alt="Profile"
              className="video-profile-img"
            />
            <div className="video-text-box">
              <h5>
                สวัสดีครับ ผมชื่อ ณัฐภัทร กิ่งจักร์ มีชื่อเล่นว่า บอส ผมเกิดและโตขึ้นในจังหวัดลำปาง
                ผมเริ่มต้นการศึกษาในระดับอนุบาลจนถึงมัธยมต้นที่ โรงเรียนเทศบาล 7 หลังจากนั้นได้ศึกษาต่อในระดับประกาศนียบัตรวิชาชีพ (ปวช.) ที่ วิทยาลัยเทคนิคลำปาง และปัจจุบันกำลังศึกษาต่อในระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
                ผมมีความสนใจเป็นพิเศษในด้าน Programming และการเขียน Code ในหลากหลายรูปแบบ งานอดิเรกของผมคือการ ฟังเพลง, อ่านนวนิยาย, รวมถึงการศึกษาการเขียน Coding เพื่อพัฒนาทักษะใหม่ ๆ อยู่เสมอ
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section section">
        <h1 className="education-title">ประวัติการศึกษา</h1>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="circle"></div>
            <div className="content">
              <h2>โรงเรียนเทศบาล 7</h2>
              <p>สำเร็จการศึกษาระดับมัธยมต้น ในปี พ.ศ. 2563</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="circle1"></div>
            <div className="content">
              <h2>วิทยาลัยเทคนิคลำปาง</h2>
              <p>สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพ (ปวช.) ในปี พ.ศ. 2566</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="circle"></div>
            <div className="content">
              <h2>วิทยาลัยเทคนิคลำปาง</h2>
              <p>ปัจจุบันศึกษาระดับประกาศนียบัตรวิชาชั้นสูง (ปวส.) ในปี พ.ศ. 2567</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="achievement-section">
  <h1 className="achievement-title">กิจกรรม</h1>
  <div className="achievement-container">
    <div className="achievement-card">
      <img
        src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/469196617_122127421400427966_5304480434697292141_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTEZby5SnnnUWpg8F9r8aL_RsWlDdcexr9GxaUN1x7GjijLUPM8rfk98v4ACCu1vFlFUN_nwu46fPVHPEqAFCB&_nc_ohc=Qf8rY2vbwHkQ7kNvgGxfa4b&_nc_oc=AdgtZqELR5F7M4KycTIHKLakqbdJ9Ip_Wi8FivqOsz64mVcL3ShtscoYQOUWx239OFaTCbkFrSFjAd2txNjpHR3P&_nc_zt=23&_nc_ht=scontent.fbkk5-8.fna&_nc_gid=AMN0dWTIyuHZ3-qzI52K7YX&oh=00_AYDMFd7shnLQWuyACWBsPdTwfA05iFvvKmGT8sf0mfrHrA&oe=67B124D3"
        alt="กิจกรรม 1"
        className="achievement-img"
      />
      <h2>86TH LPTC Family Run</h2>
      <p>
      ได้เข้าร่วมกิจกรรม 86TH LPTC Family Run ซึ่งเป็นประสบการณ์ที่เต็มไปด้วยความสนุกและความสุข กิจกรรมนี้ช่วยส่งเสริมสุขภาพที่ดี
      </p>
    </div>
    <div className="achievement-card">
      <img
        src="https://www.skp.ac.th/UserFiles/images/21200440_666913236840558_2053825510489150162_o.jpg"
        alt="กิจกรรม 2"
        className="achievement-img"
      />
      <h2>การแข่งขันจรวดขวดน้ำ</h2>
      <p>
      ได้เข้าร่วมการแข่งขัน จรวดขวดน้ำ ซึ่งเป็นกิจกรรมที่เต็มไปด้วยความท้าทายและความคิดสร้างสรรค์ การแข่งขันครั้งนี้ช่วยให้ได้เรียนรู้เรื่องหลักการทางวิทยาศาสตร์
      </p>
    </div>
    <div className="achievement-card">
      <img
        src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/451417729_1050902980192406_5212625191626417830_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPo2zZYQC_RnkMTa8gav2GqE0GiIwfNZeoTQaIjB81l8-ieg4pwD1WfJuTrQM-QKUlwrZHWvffto4An4SGH7H-&_nc_ohc=34RRd_iedxcQ7kNvgGm1VYL&_nc_oc=AdhScTHXwhHLB6LwLPPOk-QUvnifmD_kXmmadaHcSNVrTNXF2zt_ethnIdAL-_MMz5k97XxuihpfP3AjNSoltDdG&_nc_zt=23&_nc_ht=scontent.fbkk5-3.fna&_nc_gid=AITMSud7LszpmQtY1GeefR5&oh=00_AYBeE3mQqc38iflJjnekIBuArBx4RLfzoRB3GzeJsfgWgw&oe=67B127AD"
        alt="Achievement 3"
        className="achievement-img"
      />
      <h2>แห่เทียนพรรษา</h2>
      <p>
      เข้าร่วมกิจกรรม แห่เทียนพรรษา ซึ่งเป็นประเพณีที่งดงามและเต็มไปด้วยคุณค่าทางวัฒนธรรม กิจกรรมนี้ทำให้ฉันได้เรียนรู้ถึงความสำคัญของศาสนาและการอนุรักษ์ประเพณีไทย
      </p>
    </div>
  </div>
 </div>
 </div>
  );
};

export default Aboutme;
