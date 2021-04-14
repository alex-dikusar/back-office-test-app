Feature('Test intranet feature');

Scenario('test login action', async ({ I }) => {
  I.amOnPage('/blog');

  const searchValue = 'angular';
  const searchButton = '.icon-search.Button-icon-onlyright';
  const searchInput = '.ant-input.Input.Search-input';
  const Cookie = await I.grabCookie();
  const { data: { data } } = await I.sendPostRequest(
    '/~api/json/catalog.softteco/getBlogs',
    { search: searchValue },
    { Cookie }
  );
  const itemTitle = data && data[0] && data[0].title;

  I.seeElement(searchButton);
  I.click(searchButton);
  I.seeElement(searchInput);
  I.fillField(searchInput, searchValue);
  I.see(itemTitle);
});