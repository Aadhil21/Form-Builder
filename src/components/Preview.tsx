import React from "react";
import "./Preview.css";

type PreviewProps = {
  formData: {
    id: number;
    name: string;
    title: string;
    description: string;
    imagePosition?: "left" | "right";
  };
};

const Preview: React.FC<PreviewProps> = ({ formData }) => {
  return (
    <div className="preview-container">
      {formData.id === 1 ? (
        <div
          className={`preview-input-group welcome-screen-preview ${formData.imagePosition === "left" ? "image-left" : "image-right"}`}>
          {formData.imagePosition === "left" && (
            <img
              src="https://placehold.co/500x300/EEE/31343C"
              alt="Welcome"
              className="welcome-image image-left"
            />
          )}
          <div className="preview-text welcome-text">
            <h2 className="preview-title">{formData.title}</h2>
            <p className="preview-description">{formData.description}</p>
            <button className="preview-button">Start</button>
          </div>
          {formData.imagePosition === "right" && (
            <img
              src="https://placehold.co/500x300/EEE/31343C"
              alt="Welcome"
              className="welcome-image image-right"
            />
          )}
        </div>
      ) : formData.id === 2 ? (
        <div className="preview-input-group">
          <h2 className="preview-title">{formData.title}</h2>
          <p className="preview-description">{formData.description}</p>
          <label className="preview-label">
            <input
              type="email"
              placeholder="Enter your email"
              className="preview-input"
            />
          </label>
        </div>
      ) : (
        formData.id !== 1 && (
          <div className="preview-input-group">
            <h2 className="preview-title">{formData.title}</h2>
            <p className="preview-description">{formData.description}</p>
            <label className="preview-label">
              Input Field:
              <input
                type="text"
                placeholder="Enter value"
                className="preview-input"
              />
            </label>
          </div>
        )
      )}
    </div>
  );
};

export default Preview;
