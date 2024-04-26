export default function Root() {
  return (
    <>
      <div id="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          <div className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h2 className="auth-form__heading">Login to play</h2>
              </div>
              <div className="auth-form__info">
                <div className="auth-form__info-details">
                  <input
                    type="text"
                    className="auth-form__info-input"
                    placeholder="Email/Số điện thoại"
                  />
                </div>
                <div className="auth-form__info-details">
                  <input
                    type="password"
                    className="auth-form__info-input"
                    placeholder="Mật khẩu"
                  />
                </div>
              </div>
            </div>
          </div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href={`https://codesandbox.io/s/q2z497?file=%2Fsrc%2FApp.js&utm_medium=sandpack`}
              >
                Your Name
              </a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
