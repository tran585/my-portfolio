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
    // send datas user by axios to my getform //
    // config axiosRequest (url, data, token = null, method = 'post') //
    const response = await axiosRequest(
      'https://getform.io/f/navvlpra',
      formData,
      null,
      'post'
    )
    if (response.status === 200) {
      setDatasForm(true) //
      evt.target.reset() // reset when form is sent //
      setTimeout(function () {
        setDatasForm(false)
      }, 3000) // delay to reset animation with state (false) //
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
          {/* field name user */}
          <FieldGroup
            id="name"
            type="text"
            labelText="Nom"
            placeholder="Indiquez votre nom"
          />
          {/* field email user */}
          <FieldGroup
            id="email"
            type="email"
            labelText="Email"
            placeholder="exemple@domaine.com"
          />
          {/* field text user */}
          <FieldGroup id="message" labelText="Message">
            <textarea
              rows="4"
              name="message"
              id="message"
              required
              minLength={10}
              maxLength={350}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              placeholder="Entrez votre message"></textarea>
          </FieldGroup>
          <div className="flex relative gap-6 mx-auto mt-8 max-w-52 hover:shadow-form rounded-md bg-green-300 py-3 px-12 text-base font-semibold text-black outline-none">
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
