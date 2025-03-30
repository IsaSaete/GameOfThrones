import { getApp } from "./components/App/getApp.js";
import getModal from "./components/Modal/getModal.js";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Root container is missing");
}

const handleShowModal = (characterPhrase: string): void => {
  const modalMessage = document.createElement("span");
  modalMessage.textContent = characterPhrase;

  const Modal = getModal(modalMessage);

  rootElement.appendChild(Modal);
};

const App = getApp(handleShowModal);

rootElement.appendChild(App);
