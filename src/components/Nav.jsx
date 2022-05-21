function Nav() {
  return (
    <>
      <nav className="grey darken-3">
        <div className="nav-wrapper" style={{ margin: "0 100px" }}>
          <a href="/" className="brand-logo">
            React Cars
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
