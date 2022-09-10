const ChangeStyle = (props) => {

    let elementClass = props.className
    let setStyleProperty = props.property
    let setStyleValue1 = props.value1
    let setStyleValue2 = props.value2

    let selectedElement = document.querySelector(elementClass)

    if (props.style) {
        selectedElement.style.setProperty(setStyleProperty, setStyleValue1)
    } else {
        selectedElement.style.setProperty(setStyleProperty, setStyleValue2)
    }


    return ( 
        <div>
            <button className="" onClick={props.handleClick} type="button">
                Toggle Style
            </button>
        </div>
    );
}
 
export default ChangeStyle;