export default function Root() {
  return (
    <>
      <div id="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          <div className="auth-form">
            <h1 className="auth-form__heading">Login to play</h1>
            <div className="auth-form__close">
              <i className="ti-close"></i>
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
            <div className="auth-form__help">Quên mật khẩu ?</div>
            <button className="auth-form__btn">
              <a
                href={`https://codesandbox.io/s/q2z497?file=%2Fsrc%2FApp.js&utm_medium=sandpack`}
                className=""
              >
                Đăng nhập
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="detail"></div>
    </>
  );
}
