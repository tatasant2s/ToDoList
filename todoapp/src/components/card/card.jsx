import "./card_styles.css"

export function Card(props) {
  return (
    <div className="card">
      <button className="name" type="text">
        {props.name}
        <button type="submit" onClick={props.handleDelete}>
          <span className="material-symbols-rounded"> delete </span>
        </button>
      </button>
    </div>
  )
}
