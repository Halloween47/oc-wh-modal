"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./modal.css");
var _react = _interopRequireDefault(require("react"));
var _check = _interopRequireDefault(require("../assets/check.png"));
var _remove = _interopRequireDefault(require("../assets/remove.png"));
// import '../App.css'

function Modal(_ref) {
  var onClose = _ref.onClose,
    etat = _ref.etat;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, etat ? /*#__PURE__*/_react["default"].createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "messageModal"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _check["default"],
    alt: "check"
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Employ\xE9 ajout\xE9 avec succ\xE8s"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "Fermer le modal"))) : /*#__PURE__*/_react["default"].createElement("div", {
    id: "confirmation",
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "messageModal"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _remove["default"],
    alt: "check"
  }), /*#__PURE__*/_react["default"].createElement("p", null, "Erreur dans le formulaire."), /*#__PURE__*/_react["default"].createElement("p", null, "Tous les champs doivent \xEAtre renseign\xE9s.(version npm)"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose
  }, "Fermer"))));
}
var _default = exports["default"] = Modal;