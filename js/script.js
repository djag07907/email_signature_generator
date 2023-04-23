const form = document.querySelector("form");
const signature = document.querySelector("#signature");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value;
  const title = form.title.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const image = form.image.files[0];
  // Generate the signature HTML
  const signatureHTML = `
        <p><img src="${
          image ? URL.createObjectURL(image) : ""
        }" alt="Profile Picture" height="100"></p>
        <p><strong>${name}</strong></p>
        <p>${title}</p>
        <p>${phone}</p>
        <p>${email}</p>
    `;
  // Insert the signature into the page
  signature.innerHTML = signatureHTML;
});
