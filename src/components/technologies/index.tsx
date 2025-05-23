import css from "../../assets/svg/css_icon.svg";
import html from "../../assets/svg/html_icon.svg";
import js from "../../assets/svg/js_icon.svg";
import react from "../../assets/svg/react_icon.svg";
import node from "../../assets/svg/node_icon.svg";
import typeScript from "../../assets/svg/type_icon.svg";
import vscode from "../../assets/svg/vscode_icon.svg";

import React, { useEffect, useRef } from "react";
import "./style.css"; // Estilos separados para organização

const icons = [
  { src: html, alt: "html" },
  { src: css, alt: "css" },
  { src: js, alt: "js" },
  { src: vscode, alt: "vscode" },
  { src: typeScript, alt: "typescript" },
  { src: react, alt: "react" },
  { src: node, alt: "node" },
];

export const Technologies: React.FC = () => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const originalTags = Array.from(inner.children);
    originalTags.forEach((tag) => {
      const clone = tag.cloneNode(true);
      inner.appendChild(clone);
    });

    const totalWidth = originalTags
      .map((tag) => (tag as HTMLElement).offsetWidth)
      .reduce((acc, width) => acc + width, 0);

    const speed = 25; // pixels por segundo
    const duration = totalWidth / speed;

    inner.style.animationDuration = `${duration}s`;

    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tagList">
      <div className="inner" ref={innerRef}>
        {icons.map((icon, index) => (
          <div className="tag" key={index}>
            <img src={icon.src} alt={icon.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
