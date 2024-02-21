// import '../App.css'
import "./modal.css";
import PropTypes from "prop-types";
import React from "react";
import checkImage from "../assets/check.png";
import crossImage from "../assets/remove.png";

function Modal({ onClose, etat }) {
return (
    <>
      {etat ? (
        <div id="confirmation" className="modal">
          <div className="messageModal">
            <img src={checkImage} alt="check" />
            <p>Employé ajouté avec succès</p>
            <br />
            <button onClick={onClose}>Fermer le modal</button>
          </div>
        </div>
      ) : (
        <div id="confirmation" className="modal">
          <div className="messageModal">
            <img src={crossImage} alt="check" />
            <p>Erreur dans le formulaire.</p>
            <p>Tous les champs doivent être renseignés.(version npm)</p>
            <button onClick={onClose}>Fermer</button>
          </div>
        </div>
      )}
    </>
);
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  etat: PropTypes.bool.isRequired
};

export default Modal;