import "./button.styles.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <div className="auth-container">
      <div className="sign-in-container">
        <button
          className={`button-container ${buttonTypeClasses[buttonType]}`}
          {...otherProps}>
          {children}
        </button>
      </div>
    </div>
  );
}
