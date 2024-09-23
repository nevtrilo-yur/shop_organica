import vector from './img/vector.svg'

function Button({title, onClick}) {
    return (
      
        <button onClick={onClick} className="button">
            <div>{title}</div>
            <img src={vector} alt="vec" />
        </button>
    );
  }
  
  export default Button;