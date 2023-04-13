import Link from './Link';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Button = ({destination,label}) =>{
  const handleClick = () => {
    // what happens when button pressed
  };

  return (
    <Link to = {destination}>
        <button type="button" onClick={handleClick}>
          {label}
=======
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
const Button = ({destination}) =>{
  

  return (
    <Link to = {destination}>
        <button type="button">
          Check Accessibility!
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 5d0da92e0c48a566388f0e2fb918442efc47c2e1
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
=======
>>>>>>> 15f462918363bd5e4ee0d3cc7f1cded949b3db3b
        </button>
    </Link>
  );
};

export default Button;