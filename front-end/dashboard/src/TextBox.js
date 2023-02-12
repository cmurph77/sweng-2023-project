function TextBox({value, onChange}){
    return (
        <input
            className = "input"
            size="60"
            value = {value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default TextBox;