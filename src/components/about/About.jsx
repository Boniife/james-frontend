import React from "react";
import "./about.css";
import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section name="about" className="about-section">

        <div className="about-head-text">
          <h3 className="about-head">About Me</h3>
        </div>

        <div className="about-me">
            <img src={about} alt="Ifeanyi" className="about-img" />

          <div className="about-content">
            <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor arcu a diam auctor ultricies. Pellentesque lacinia neque eu lectus luctus, et ultrices nisl aliquet. In eu sagittis risus. Cras et faucibus erat. In hac habitasse platea dictumst. Fusce commodo nisl id ante dignissim porta. Vivamus dictum libero eget tellus ullamcorper,</h4>
            <p>
            Vivamus iaculis ultrices sapien. Aliquam erat volutpat. Donec massa mauris, maximus sed turpis et, consequat euismod nunc. Cras vitae fringilla massa. Nullam vel nibh venenatis, ornare dui vitae, posuere mauris. Quisque et massa molestie, auctor odio ut, laoreet nunc. Morbi accumsan nulla a libero venenatis, eu maximus tellus molestie.
            </p>
            <p>
            Cras nibh libero, venenatis in sagittis vitae, placerat at neque. Quisque eget aliquet arcu, eu dictum nibh. Curabitur ullamcorper vestibulum tortor, ut porttitor nisl lobortis nec. Vivamus pretium euismod turpis, nec scelerisque nisl. In consectetur at turpis at gravida. Fusce a imperdiet arcu. Integer et lobortis metus. Suspendisse nulla nunc, mattis non suscipit non, egestas at justo. Mauris placerat est gravida mi euismod sagittis. Maecenas at urna tincidunt, luctus massa in, tempus turpis. Vivamus bibendum feugiat risus quis pharetra. Suspendisse potenti. Duis pellentesque nunc eu placerat luctus. Phasellus et diam convallis ante ornare rutrum. Nam ut felis elit.
            </p>
            <p>
              I'm driven by innovation, continuous improvement and perfectionism
              being at the forefront of technologies, systems and tools. I ally
              to this some personal soft skills, as high sense of organisation
              and responsibility and technical skills as good developer and nice
              troubleshooter
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;
