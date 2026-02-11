fetch('https://test.meetsoci.com/api/update_profile.json?request_token=ztBnadNMslYGXXxTqb4t', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'email=tastethetastytest%40gmail.com',
    credentials: 'include'

});
