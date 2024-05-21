// eslint-disable-next-line
const FieldGroup = ({ type, labelText, id, placeholder, children }) => {
    const styleFormFields = 'w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'

    return ( // return complet container of input + label //
      <div className='mb-5'>
        <label htmlFor={id} className='mb-3 block text-base font-medium text-gray-400'>{labelText}</label>
        {type && <input type={type} className={styleFormFields} name={id} id={id} placeholder={placeholder} required/>}
        {children}
      </div>
    )
  }
  export default FieldGroup