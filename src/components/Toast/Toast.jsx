import { Icons } from "../routeComponents"

/* eslint-disable */
const Toast = ({sentDatasForm}) => {
  return ( // animation when message is sent successfully (true) //
    <div
      className={`absolute flex items-center top-0 right-0 p-4 w-full max-w-xs space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse rounded-lg shadow text-gray-400 divide-gray-700 space-x bg-gray-800 transition-all duration-1000 ${sentDatasForm ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      role="alert">
      <Icons className='fill-green-300 w-7 h-6' type='check'/>
      <div className="ps-4 text-sm font-normal">Votre message a été envoyé avec succès.</div>
    </div>
  )
}

export default Toast
