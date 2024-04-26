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
                  <label htmlFor="" className="auth-form__label">
                    Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    className="auth-form__info-input"
                    placeholder="Email/Số điện thoại"
                  />
                </div>
                <div className="auth-form__info-details">
                  <label htmlFor="" className="auth-form__label">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    className="auth-form__info-input"
                    placeholder="Mật khẩu"
                  />
                </div>
              </div>
              <div className="auth-form__btn">
                <a
                  href={`https://codesandbox.io/s/q2z497?file=%2Fsrc%2FApp.js&utm_medium=sandpack`}
                  className=""
                >
                  Đăng nhập
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}
