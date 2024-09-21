import React from "react";
import "./FormEditor.css";

type FormData = {
  id: number;
  name: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
};

type FormEditorProps = {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
  goBack: () => void;
};

const FormEditor: React.FC<FormEditorProps> = ({
  formData,
  updateFormData,
  goBack,
}) => {
  return (
    <div className="form-editor">
      <h2>Edit {formData.name}</h2>

      <div className="form-editor-field">
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateFormData("title", e.target.value)}
          className="form-editor-input"
        />
      </div>

      <div className="form-editor-field">
        <label>Description:</label>
        <textarea
          value={formData.description}
          onChange={(e) => updateFormData("description", e.target.value)}
          className="form-editor-textarea"
        />
      </div>

      {formData.id === 1 && (
        <div className="form-editor-field">
          <label>Choose Image Position:</label>
          <div className="form-editor-radio-group">
            <label className="radio-box">
              <input
                type="radio"
                name="imagePosition"
                value="left"
                checked={formData.imagePosition === "left"}
                onChange={(e) =>
                  updateFormData("imagePosition", e.target.value)
                }
              />
              <span className="box">Left</span>
            </label>
            <label className="radio-box">
              <input
                type="radio"
                name="imagePosition"
                value="right"
                checked={formData.imagePosition === "right"}
                onChange={(e) =>
                  updateFormData("imagePosition", e.target.value)
                }
              />
              <span className="box">Right</span>
            </label>
          </div>
        </div>
      )}

      <button onClick={goBack} className="form-editor-save-button">
        Save
      </button>
    </div>
  );
};

export default FormEditor;
