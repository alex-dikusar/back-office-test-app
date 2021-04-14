// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login: function(email="", password="", reserveEmail="") {
      const emailElement = "[id='identifierId'][type='email']";
      const reserveEmailElement = "[name='identifier'][type='email']";
      const passwordElement = "[name='password'][type='password']";
      const nextButtonElement = "[type='button']";
      const secondNextButtonElement = "[jsname='LgbsSe']";

      this.amOnPage("/");

      this.seeElement(emailElement);
      this.fillField(emailElement, email);
      this.seeElement(nextButtonElement);
      this.click(nextButtonElement);
      this.wait(1);

      this.seeElement(reserveEmailElement);
      this.fillField(reserveEmailElement, reserveEmail);
      this.seeElement(secondNextButtonElement);
      this.click(secondNextButtonElement);
      this.wait(1);

      this.seeElement(passwordElement);
    },
  });
}
