Feature('Test pages feature').retry(1);

Before(({ I }) => {
  I.login('user','password');
});

Scenario('test users page', ({ I }) => {
  const usersTabElement = "[data-test-id='users-tab']";

  I.seeElement(usersTabElement);
  I.click(usersTabElement);
  I.seeElement("[data-test-id='users-page']");
});

Scenario('test groups page', ({ I }) => {
  const groupsTabElement = "[data-test-id='groups-tab']";

  I.seeElement(groupsTabElement);
  I.click(groupsTabElement);
  I.seeElement("[data-test-id='groups-page']");
});