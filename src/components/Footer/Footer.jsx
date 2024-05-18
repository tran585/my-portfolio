import { Icons } from '../routeComponents'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col items-center p-6 mx-auto space-y-4 sm:space-y-0 gap-5">
        <div className="flex -mx-2">
          <a href="https://github.com/tran585" target="_blank" aria-label="lien vers mon github">
            <Icons
              type="github"
              className="w-10 fill-black-100 duration-300  hover:fill-black/80"
            />
          </a>
        </div>
        <p className="text-sm text-gray-600 text-end">
          © 2024 Tran Thanh. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
