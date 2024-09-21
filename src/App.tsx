import React, { useState } from "react";
import FormEditor from "./components/FormEditor";
import Preview from "./components/Preview";
import FormModal from "./components/FormModal";
import "./App.css";

type FormData = {
  id: number;
  name: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
};

type PredefinedForm = Omit<FormData, "id">;

const App: React.FC = () => {
  const [forms, setForms] = useState<FormData[]>([
    {
      id: 1,
      name: "Welcome screen",
      title: "Welcome to our form",
      description: "This is a description of the form",
      imagePosition: "right",
    },
    {
      id: 2,
      name: "Enter your email",
      title: "Enter your email",
      description: "This willl be used to contact you for the next steps",
    },
  ]);

  const [selectedFormId, setSelectedFormId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const predefinedForms: PredefinedForm[] = [
    {
      name: "Contact Information",
      title: "Contact Info",
      description: "Please enter your contact information.",
    },
    {
      name: "Feedback Form",
      title: "Feedback",
      description: "We value your feedback. Please provide your comments.",
    },
    {
      name: "Survey Form",
      title: "Survey",
      description: "Please fill out this survey to help us improve.",
    },
  ];

  const addForm = (formType: PredefinedForm) => {
    const newForm: FormData = {
      id: forms.length + 1,
      ...formType,
    };
    setForms([...forms, newForm]);
    setSelectedFormId(newForm.id);
    setIsModalOpen(false);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setForms(
      forms.map((form) =>
        form.id === selectedFormId ? { ...form, [field]: value } : form,
      ),
    );
  };

  const removeForm = (formId: number) => {
    setForms(forms.filter((form) => form.id !== formId));
    if (selectedFormId === formId) setSelectedFormId(null);
  };

  const selectedForm = forms.find((form) => form.id === selectedFormId);
  const defaultForm = forms[0];

  return (
    <div className="app-container">
      <div className="left-section">
        {selectedFormId ? (
          <FormEditor
            formData={selectedForm!}
            updateFormData={updateFormData}
            goBack={() => setSelectedFormId(null)}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}>
            <h2>Select a Form</h2>
            <ul style={{ flex: 1 }}>
              {forms.map((form) => (
                <li key={form.id} className="form-item">
                  <div className="form-selector">
                    <button onClick={() => setSelectedFormId(form.id)}>
                      {form.name}
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => removeForm(form.id)}>
                      ×
                    </button>
                  </div>
                </li>
              ))}
              <div className="add-form-container">
                <button
                  className="add-form-button"
                  onClick={() => setIsModalOpen(true)}>
                  &#43; Add Form
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
      <div className="right-section">
        {selectedFormId ? (
          <Preview formData={selectedForm!} />
        ) : (
          <Preview formData={defaultForm} />
        )}
      </div>
      <FormModal
        isOpen={isModalOpen}
        predefinedForms={predefinedForms}
        onFormSelect={addForm}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;
