import Navigation from "../Navigation";
import Image from "next/image";
import plusIcon from "../../public/images/plus-solid.svg";

export default function Header({ isActive, ontoggleStateActive }) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__brand">
          <Image
            className="header__logo"
            src="/images/logo.png"
            width={80}
            height={44}
            alt="Marcel Epp Webseiten Logo"
            priority={true}
          />
          <button
            className="header__toggle"
            type="button"
            onClick={ontoggleStateActive}>
            <Image
              className={
                isActive ? "header__toggle__icon--open" : "header__toggle__icon"
              }
              src={plusIcon}
              width={32}
              height={32}
              alt="Menu"
            />
          </button>
        </div>
        <Navigation
          isActive={isActive}
          ontoggleStateActive={ontoggleStateActive}
        />
      </div>
    </header>
  );
}
