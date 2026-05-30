interface IProps {
  btnText?: string;
  btnIcons?: React.ReactNode;
  btnStyle?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
}

const ResizeButton = ({
  btnText,
  btnIcons,
  btnStyle,
  onClick,
  href,
}: IProps) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="resize-button"
        style={btnStyle}
      >
        <span>{btnText}</span>
        {btnIcons}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="resize-button" style={btnStyle}>
      <span>{btnText}</span>
      {btnIcons}
    </button>
  );
};

export default ResizeButton;
