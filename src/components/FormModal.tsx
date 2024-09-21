import "./FormModal.css";

type FormType = {
  name: string;
  title: string;
  description: string;
};

type FormModalProps = {
  isOpen: boolean;
  predefinedForms: FormType[];
  onFormSelect: (form: FormType) => void;
  onClose: () => void;
};

const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  predefinedForms,
  onFormSelect,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select a Form to Add</h2>
        <ul>
          {predefinedForms.map((form, index) => (
            <li key={index}>
              <button
                className="form-choice-button"
                onClick={() => onFormSelect(form)}>
                {form.name}
              </button>
            </li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default FormModal;
