import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }

          ul.li {
            list-style-type: circle;
          }
        `}
      </style>
      <div className="content-grid">
        <h1>
          <span
            style={{ color: colorPrimary, backgroundColor: colorHighlight }}
          >
            About
          </span>
        </h1>
        <br />
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I live by Albert Einstein's words -{" "}
              <span className="highlight" style={{ fontSize: "0.8em" }}>
                "The more I learn, the more I realize how much I don't know"
              </span>
              .
            </p>
            {/* <p>
              I believe in maintaining a strong forward momentum by constantly
              challenging myself to explore and learn new things.
            </p> */}
            <br />
            <br />
            <p style={{ fontSize: "0.9em", fontWeight: "bold" }}>
              Software Engineer's Oath (by Robert C. Martin) I Try to Live By:
            </p>
            <ul
              style={{
                display: "inline-block",
                testAlign: "justify",
                justifyContent: "space-around",
                fontSize: "0.9em",
                marginLeft: "2em"
              }}
            >
              <li style={{ listStyleType: "disc" }}>
                I will not produce harmful code.
              </li>
              <li style={{ listStyleType: "disc" }}>
                The code I produce will always be my best work.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will never stop learning and improving my craft.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will produce estimates that are honest both in magnitude and
                precision.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will produce , with each release, a quick, sure and repeatable
                proof that every element of the code works as intended.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will make frequent, small releases so that I don't impede
                progress of others.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will fearlessly and relentlessly improve our work at every
                opportunity. I will never allow it to degrade.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will do all that I can to keep the productivity of myself and
                others as high as possible.
              </li>
              <li style={{ listStyleType: "disc" }}>
                I will continuously ensure that others can cover for me and that
                I can cover for them.
              </li>
            </ul>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
