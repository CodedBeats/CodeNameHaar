const ChangeStyle = (props) => {

    // potential example values to pass for props
    let elementClass = props.className
    let setStyleProperty = props.property
    let setStyleValue1 = props.value1
    let setStyleValue2 = props.value2

    // some code here?


    // good to put something simple here
    return ( 
        <div>
            <button className="" onClick={props.handleClick} type="button">
                Toggle Style
            </button>
        </div>
    );
}
 
export default ChangeStyle;