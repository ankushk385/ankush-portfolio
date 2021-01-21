import React, { useEffect, useRef } from "react";
import "./css/page3.css";
import video from "./images/vid.mp4";
import gsap, { TimelineLite, Power2 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);

function Page3() {
  let card = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);
  let cardBefore = CSSRulePlugin.getRule(".project-card::before");
  let cardAfter = CSSRulePlugin.getRule(".project-card::after");
  let para = useRef(null);
  let title = useRef(null);
  let para2 = useRef(null);
  let title2 = useRef(null);
  let para3 = useRef(null);
  let title3 = useRef(null);
  let image = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    tl.to([cardBefore, cardAfter], {
      width: "100%",
      ease: Power2.easeIn,
      duration: ".5",
      delay: 0,
    })

      .to([title, title2, title3], {
        color: "white",
        marginTop: "0px",
        duration: ".5",
        delay: 0,
      })
      .to(image, {
        opacity: "1",
        ease: Power2.easeIn,
        duration: ".3",
        delay: 0,
      })
      .to([para, para2, para3], {
        clipPath: "circle(160% at 40% 70%)",
        color: "white",
        duration: ".7",
        opacity: "1",
        delay: 0,
      })
      .to([card, card2, card3], {
        translateX: "95px",
        duration: ".7",
        delay: 0,
      })
      .to([cardAfter, cardBefore], {
        background: "linear-gradient(0deg, #31204a, #cf2562)",
        borderRadius: "5px",
        duration: ".7",
        delay: 0,
      });

    tl.pause();

    card.addEventListener("mouseenter", () => {
      tl.play();
    });
    // card.addEventListener("mouseleave", () => {
    //   tl.reverse();
    // });
    // card2.addEventListener("mouseenter", () => {
    //   tl.play();
    // });
    // card2.addEventListener("mouseleave", () => {
    //   tl.reverse();
    // });
    // card3.addEventListener("mouseenter", () => {
    //   tl.play();
    // });
    // card3.addEventListener("mouseleave", () => {
    //   tl.reverse();
    // });
  });

  return (
    <>
      <div className="project-section">
        <h1>My Projects</h1>
        <div className="project-container">
          <div className="sm-container">
            <div className="project-card" ref={(el) => (card = el)}>
              <h1 ref={(el) => (title = el)}>project 1:name of the project</h1>
              <p ref={(el) => (para = el)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                fugit aspernatur sapiente non? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Possimus tenetur corrupti, libero
                mollitia alias id, perspiciatis deserunt veniam eius quasi
                temporibus culpa ab.
              </p>
            </div>
            <video ref={(el) => (image = el)} alt="." autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="project-card" ref={(el) => (card2 = el)}>
            <h1 ref={(el) => (title2 = el)}>project 1:name of the project</h1>
            <p ref={(el) => (para2 = el)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fugit aspernatur sapiente non? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Possimus tenetur corrupti, libero
              mollitia alias id, perspiciatis deserunt veniam eius quasi
              temporibus culpa ab.
            </p>
          </div>
          <div className="project-card" ref={(el) => (card3 = el)}>
            <h1 ref={(el) => (title3 = el)}>project 1:name of the project</h1>
            <p ref={(el) => (para3 = el)}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              fugit aspernatur sapiente non? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Possimus tenetur corrupti, libero
              mollitia alias id, perspiciatis deserunt veniam eius quasi
              temporibus culpa ab.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page3;
