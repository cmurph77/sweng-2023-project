import Link from './Link';

const Button = ({destination,label}) =>{
  const handleClick = () => {
    // what happens when button pressed
  };

  return (
    <Link to = {destination}>
        <button type="button" onClick={handleClick}>
          {label}
        </button>
    </Link>
  );
};

export default Button;