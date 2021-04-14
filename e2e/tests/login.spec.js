Feature('Test login feature');

Scenario('test logout action', ({ I }) => {
  const userAvatarElement = "[data-test-id='user-avatar']";
  const logoutBtnElement = "[data-test-id='logout-btn']";

  I.login('user','password');
  I.seeElement(userAvatarElement);
  I.click(userAvatarElement);
  I.seeElement(logoutBtnElement);
  I.click(logoutBtnElement);
  I.seeElement("[data-test-id='login-page']");
});

Scenario('test failed login', async ({ I }) => {
  const isUserLoggedIn = await tryTo(() => I.login('user','1111'));
  if (isUserLoggedIn) {
    I.seeElement("[data-test-id='auth-error-message']");
  } else {
    I.login('user','password');
  }
});