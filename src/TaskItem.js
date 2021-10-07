export const TaskItem = ({ isChecked, taskName, onTaskChange }) => {
  const styleOfComponent = {
    textDecoration: isChecked ? "line-through" : "",
  };

  return (
    <li>
      <input onChange={onTaskChange} checked={isChecked} type="checkbox" />
      <span style={styleOfComponent}>{taskName}</span>
    </li>
  );
};
