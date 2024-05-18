// eslint-disable-next-line
const FieldGroup = ({ type = 'text', labelText, id, classLabel, classInput, disabled, placeholder, required }) => {
    return ( // return complet container of input + label //
      <div className='mb-5'>
        <label htmlFor={id} className={classLabel}>{labelText}</label>
        <input type={type} className={classInput} name={id} id={id} disabled={disabled} placeholder={placeholder} required={required}/>
      </div>
    )
  }
  export default FieldGroup