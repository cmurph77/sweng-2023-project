import Link from './Link';

const Button = ({destination}) =>{
  const handleClick = async () => {
    const url = document.getElementById('userInput').value;
        const data = {
            url: url
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('http://localhost:3000//api', options);
        const json = await response.json();
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