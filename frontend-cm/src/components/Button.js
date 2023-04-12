import Link from './Link';

const Button = ({destination}) =>{
  const handleClick = () => {
    // what happens when button pressed
  };

  return (
    <Link to = {destination}>
        <button type="button" onClick={handleClick}>
          Check Accessibility!
        </button>
    </Link>
  );
};

export default Button;