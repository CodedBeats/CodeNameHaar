// style
import ".././misc/css/page-container.css"
import "./css/modal.css"

const Modal = (props) => {

    // define what props will be used for
    let modalTitle = props.title
    let modalBody = props.body
    let modalID = props.id

    const closeModal = () => {
        let modal = document.getElementById("modal-box")
        modal.style.display = "none"
    }

    return ( 
        <div id={modalID} className="modal">
            <div className="modal-content">
                <div className="modal-title">
                    <span onClick={closeModal} className="close-modal">&times;</span>
                    <h2>{modalTitle}</h2>
                </div>
                <div className="modal-body">
                    <p>{modalBody}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;