function TextBox({value, onChange}){
    return (
        <input
            className = "input"
            value = {value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default TextBox;