export default function Root() {
  return (
    <>
      <div id="modal">
        <div className="modal-overlay"></div>
        <div>
          <h1>Login to play</h1>
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
