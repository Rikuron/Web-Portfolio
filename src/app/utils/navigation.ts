import React from 'react';

export const handleNavClick = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.substring(href.indexOf("#") + 1);

  if (targetId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    let offset = -90;

    if (targetId === 'contact') { 
      offset = -140;
    }

    const topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }
};