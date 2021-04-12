Feature('Test app feature');

Scenario('test users page', ({ I }) => {
  const usersTabElement = "[data-test-id='users-tab']";

  I.login('user','password');
  I.seeElement(usersTabElement);
  I.click(usersTabElement);
  I.seeElement("[data-test-id='users-page']");
});

Scenario('test groups page', ({ I }) => {
  const groupsTabElement = "[data-test-id='groups-tab']";

  I.login('user','password');
  I.seeElement(groupsTabElement);
  I.click(groupsTabElement);
  I.seeElement("[data-test-id='groups-page']");
});

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