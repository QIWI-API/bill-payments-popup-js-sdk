import React, { useEffect } from 'react';

const Container = ({ children }) => (
  <div
    style={{
      position: 'relative',
      width: '820px',
      height: '600px'
    }}
  >
    {children}
  </div>
);

const CloseButton = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      appearence: 'none',
      background: 'transparent',
      border: 'none',
      fontSize: '2rem',
      position: 'absolute',
      top: '0px',
      right: '0px'
    }}
  >
    ✕
  </button>
);

const Popup = ({ children, isActive, onClickClose }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClickClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div
      style={{
        display: isActive ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100vw',
        height: '100vh',
        margin: '0 auto',
        backgroundColor: 'rgba(0, 0, 0, 25%)'
      }}
    >
      <Container>
        {children}
        <CloseButton onClick={onClickClose} />
      </Container>
    </div>
  );
};

export default Popup;
