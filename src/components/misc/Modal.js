// style
import ".././misc/css/page-container.css"
import "./css/modal.css"

const Modal = (props) => {

    // define what props will be used for
    let titleText = props.title
    let bodyText = props.body
    let link = props.link
    let onClose = props.onClose

    return ( 
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">
                    <span onClick={() => onClose()} className="close-modal">&times;</span>
                    <h2>{titleText}</h2>
                </div>
                <div className="modal-body">
                    <a href={link}>{bodyText}</a>
                </div>
            </div>
        </div>
    );
}

export default Modal;