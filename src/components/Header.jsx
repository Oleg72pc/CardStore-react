function Header() {
  return (  
  <nav>
  <div className="nav-wrapper">
    <a href="/" className="brand-logo">Card store</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
    {/* <li>
    <form>
        <div className="input-field">
          <input id="search" type="search" required/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
    </form>
    </li> */}
      <li><a href="/">Войти</a></li>
      <li><a href="/">Регистрация</a></li>
      <li><a href="/">Домой</a></li>
    </ul>
  </div>
 
</nav>
)}

export {Header}
