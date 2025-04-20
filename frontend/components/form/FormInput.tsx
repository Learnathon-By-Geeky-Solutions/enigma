type FormInputProps = {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    error?: string;
};

const FormInput = ({ label, name, type, placeholder, error }: FormInputProps) => {
    return (
        <div className='form-grp'>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} placeholder={placeholder} />
            {error && <p className='form_error'>{error}</p>}
        </div>
    );
};

export default FormInput;