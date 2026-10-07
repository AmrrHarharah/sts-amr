import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <header className="h-16 border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex h-full max-w-6xl items-center px-2 sm:px-6">
        <Link
          className="flex items-center gap-1 border-r border-neutral-200 pr-2 text-sm font-semibold sm:gap-2 sm:pr-6 sm:text-lg"
          to="/"
        >
          <p className="grid h-7 w-7 place-items-center rounded-lg bg-neutral-900 text-sm font-bold text-white shadow-sm sm:h-8 sm:w-8">
            L
          </p>
          <p>Logo</p>
        </Link>

        <div className="ml-1 flex items-center gap-0.5 sm:ml-5 sm:gap-1">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/testimony" className={navLinkClass}>
            Testimoni
          </NavLink>
          <NavLink to="/faq" className={navLinkClass}>
            FAQ
          </NavLink>
        </div>

        <Link
          className="ml-auto rounded-lg bg-neutral-900 px-2 py-2 text-xs font-medium text-white shadow-sm hover:bg-neutral-700 sm:px-3 sm:text-sm"
          to="/"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}

function navLinkClass({ isActive }) {
  if (isActive) {
    return "rounded-lg bg-neutral-200 px-0.5 py-2 text-xs text-neutral-900 sm:px-3 sm:text-sm";
  }
  return "rounded-lg px-0.5 py-2 text-xs text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 sm:px-3 sm:text-sm";
}

export default Navbar;
