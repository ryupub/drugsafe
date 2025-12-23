import React from 'react';

const SkipNavigation = () => {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
    }
  };

  return (
    <nav id="skip-navigation">
      <ul>
        <li>
          <a
            href="#content"
            onClick={(e) => handleSkip(e, 'content')}
          >
            본문 바로가기
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SkipNavigation;