export const TaskItem = ({ isChecked, taskName }) => {
    const styleOfComponent = {
      textDecoration: isChecked ? "line-throught" : "",
    };

    return (
        <li>
            <input checked = {isChecked} type="checkbox"/>
            <span style={styleOfComponent}>{taskName}</span>
        </li>
    );
};