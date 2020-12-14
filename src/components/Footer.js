import IconFb from './icons/IconFb'
import IconIns from './icons/IconIns'
import IconPin from './icons/IconPin'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a className="footer__icon" href="https://www.facebook.com/">
          <span className="sr-only">fb link</span>
          <IconFb />
        </a>
        <a className="footer__icon" href="https://www.pinterest.com/">
          <span className="sr-only">pin link</span>
          <IconPin />
        </a>
        <a className="footer__icon" href="https://www.instagram.com/">
          <span className="sr-only">ins link</span>
          <IconIns />
        </a>
      </div>      
    </footer>
  )
}
