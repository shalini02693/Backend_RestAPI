import '../styles/dashboard.css';

export default function TaskCard({ task, onDelete }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>

      <p>{task.description}</p>

      <button className="task-delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}