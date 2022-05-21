function Footer() {
  return (
    <>
      <footer className="page-footer  grey darken-1 lighten-3">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
