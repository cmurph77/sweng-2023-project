import Link from './Link';

const Button = ({destination}) =>{
  

  return (
    <Link to = {destination}>
        <button type="button">
          Check Accessibility!
        </button>
    </Link>
  );
};

export default Button;