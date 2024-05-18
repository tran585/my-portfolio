import { axiosRequest } from '../../../utils/axiosConfig/axiosRequest'
import { useState } from 'react'
import { Icons, FieldGroup, Toast } from '../../../components/routeComponents'

/* eslint-disable */
const ContactSection = () => {
  // event config axios & getform to receive mail //
  const [sentDatasForm, setDatasForm] = useState(false) // if ok sentDatasForm = true to show animation (Toast) for user //
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const response = await axiosRequest(
      'https://getform.io/f/lbkmxpmb',
      formData,
      null,
      'post'
    )
    if (response.status === 200) {
      setDatasForm(true)
      setTimeout(function () {
        setDatasForm(false)
      }, 3000)
    }
  }

  return (
    <section
      id="contact-section"
      aria-label="Section contact"
      className="relative flex items-center justify-center">
      <div className="mx-auto w-full max-w-[550px]">
        <h2 className="text-center mb-9">Me contacter</h2>
        <form onSubmit={handleSubmit} action="." method="POST">
          <input type="hidden" name="_gotcha" className="!hidden" />
          <FieldGroup
            id="name"
            type="text"
            labelText="Nom"
            required
            placeholder="Indiquez votre nom"
            classLabel="mb-3 block text-base font-medium text-gray-400"
            classInput="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <FieldGroup
            id="email"
            type="email"
            labelText="Email"
            required
            placeholder="exemple@domaine.com"
            classLabel="mb-3 block text-base font-medium text-gray-400"
            classInput="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-gray-400">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              required
              placeholder="Entrez votre message"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
          </div>
          <div className="flex relative gap-6 m-auto max-w-52 hover:shadow-form rounded-md bg-green-300 py-3 px-12 text-base font-semibold text-black outline-none">
            <Icons type="plane" className="w-4 h3" />
            <button className="after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0">
              Envoyer
            </button>
          </div>
        </form>
        {/* animation component if message sent */}
        <Toast sentDatasForm={sentDatasForm} />
      </div>
    </section>
  )
}

export default ContactSection
