fetch("https://refeng.erad.com/Admin/AdminUsers/UpdateUserDetails", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `PersonKey=25692&LastName=aa&FirstName=aa&GenderCode=M&user_groups=110&user_groups=119&user_groups=120&multiselect=110&multiselect=119&multiselect=120`
      });
