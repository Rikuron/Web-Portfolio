import React from 'react';

export const handleNavClick = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.substring(href.indexOf("#") + 1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const offset = -90;
    const topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }
};