import './ButtonComponent.css';

function ButtonComponent(props) {
    const { children, colorFondo } = props;

    return (
    <>
        <button onClick={props.onTouch} className="button-64">
            <span className="button-text">{children}</span>
        </button>
    </>
    );
}

export default ButtonComponent;