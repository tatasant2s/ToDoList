import './card_styles.css';

export function Card(props) {
    
    return (
        <div className='card'>
            <button onClick={() => props.handleDelete(props.id)}> {props.name}
                <span className="material-symbols-rounded"> delete </span> 
            </button>
        </div>
    );
}