import React from 'react';
import avatar from './avatar.jpg';
import './style.css';

function LoadingImage() {
  return (
    <header className="loading-frame">
      <div className="loading">
        <div className="loading-border">&nbsp;</div>
        <img src={avatar} className="loading-avatar" alt="avatar" />
      </div>
    </header>
  );
}

export default LoadingImage;
