import React, { useState, useRef, useCallback } from 'react';
import './ImageComparisonSlider.css';

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Rescue',
  afterLabel = 'After Recovery',
  altText = 'Rescue transformation before and after'
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <div 
      className="comparison-slider-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt={`${altText} - ${afterLabel}`}
        className="comparison-img after-img" 
      />
      <span className="comparison-badge badge-after">{afterLabel}</span>

      {/* Before Image (Foreground Clipped) */}
      <div 
        className="comparison-before-wrapper"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${altText} - ${beforeLabel}`}
          className="comparison-img before-img" 
        />
        <span className="comparison-badge badge-before">{beforeLabel}</span>
      </div>

      {/* Divider Handle */}
      <div 
        className="comparison-handle"
        style={{ left: `${sliderPosition}%` }}
        aria-hidden="true"
      >
        <div className="handle-line" />
        <div className="handle-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      {/* Accessible Range Input */}
      <input 
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="comparison-range-input"
        aria-label="Slide to compare before and after recovery photographs"
      />
    </div>
  );
}
