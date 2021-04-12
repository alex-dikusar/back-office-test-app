// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login: function(username="", password="") {
      const userNameElement = "[data-test-id='username']";
      const passwordElement = "[data-test-id='password']";
      const submitBtn = "[data-test-id='login-submit']";

      this.amOnPage("/");

      this.seeElement(userNameElement);
      this.fillField(userNameElement, username);

      this.seeElement(passwordElement);
      this.fillField(passwordElement, password);

      this.click(submitBtn);
    },
  });
}
