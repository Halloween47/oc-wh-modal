// import '../App.css'
import "./modal.css";
import PropTypes from "prop-types";
import React from "react";
import checkImage from "../assets/check.png";
import crossImage from "../assets/remove.png";

// Définition d'un composant fonctionnel nommé "Modal" prenant deux props : onClose et etat
function Modal({ onClose, etat }) {
// Retourne le contenu du composant Modal
  return (
    <>
    {/* Utilisation d'un opérateur ternaire pour afficher différentes sections basées sur la valeur de "etat" */}
      {etat ? (
        // Si "etat" est true, affiche cette section
        <div id="confirmation" className="modal">
          <div className="messageModal">
            <img src={checkImage} alt="check" />
            <p>Employé ajouté avec succès</p>
            <br />
            <button onClick={onClose}>Fermer le modal</button>
          </div>
        </div>
      ) : (
        // Si "etat" est false, affiche cette section
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

// Spécification des types des props attendues par le composant Modal
Modal.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose doit être une fonction et est requis
  etat: PropTypes.bool.isRequired // etat doit être un booléen et est requis
};

export default Modal; // Export du composant Modal