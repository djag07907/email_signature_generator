const form = document.querySelector("form");
const signature = document.querySelector("#signature");
const outputSocialMedia = document.querySelector("#output-socialmedia");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   Get form values
  const name = form.name.value;
  const title = form.title.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const image = form.image.files[0];
  const website = form.website.value;
  const linkedin = form.linkedin.value;
  const github = form.github.value;
  const instagram = form.instagram.value;
  const whatsapp = form.whatsapp.value;

  // Generate the signature HTML
  //   const signatureHTML = `
  //         <p><img src="${
  //           image ? URL.createObjectURL(image) : ""
  //         }" alt="Profile Picture" height="100"></p>
  //         <p><strong>${name}</strong></p>
  //         <p>${title}</p>
  //         <p>${phone}</p>
  //         <p>${email}</p>
  //     `;
  const signatureHTML = `
  <table>
    <tr>
      <td>
        <img src="${
          image ? URL.createObjectURL(image) : ""
        }" alt="Profile Picture" height="100">
      </td>
      <td style="vertical-align: top; padding-left: 10px;">
        <p><strong>${name}</strong></p>
        <p>${title}</p>
      </td>
    </tr>
    <tr>
      <td colspan="2" style="border-bottom: 1px solid #0077b6; padding-top: 10px;"></td>
    </tr>
    <tr>
      <td style="vertical-align: top;">${phone}</td>
      <td style="vertical-align: top; padding-left: 10px;">${email}</td>
    </tr>
  </table>
`;

  // Generate the social media HTML
  const socialMediaHTML = `
  <a href="${website}"><img src="images/web.png" alt="Website"></a>
  <a href="${linkedin}"><img src="images/linkedin.png" alt="LinkedIn"></a>
  <a href="${github}"><img src="images/github.png" alt="GitHub"></a>
  <a href="${instagram}"><img src="images/instagram.png" alt="Instagram"></a>
  <a href="${whatsapp}"><img src="images/whatsapp.png" alt="WhatsApp"></a>
`;

  // Insert the signature and social media into the page
  signature.innerHTML = signatureHTML;
  document
    .querySelector("#signature-container")
    .insertAdjacentHTML("beforeend", socialMediaHTML);
});
