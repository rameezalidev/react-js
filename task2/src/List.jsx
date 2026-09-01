function List({ list, setList }) {
  function handleDelete(idxToRemove) {
    setList(list.filter((el, idx) => idx !== idxToRemove));
  }

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Items</h2>
        <span>{list.length}</span>
      </div>

      <ul>
        {list.map((el, idx) => (
          <li key={idx}>
            <div className="item-content">
              <span className="number">{idx + 1}</span>
              <span className="item-name">{el}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(idx)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {list.length === 0 && (
        <div className="empty">
          <p>Your list is empty</p>
          <span>Add something using the input above.</span>
        </div>
      )}
    </div>
  );
}

export default List;
