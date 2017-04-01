import {$, browser, by, element} from "protractor";

// describe('Given views should flip through navigation interaction', () => {
//   let view1 = $('#view1');
//   let view2 = $('#view2');
//   beforeEach(() => {
//       browser.get('view1');
//       expect(view1.isPresent()).toBeTruthy();
//       let view2Link = element(by.linkText('View2'));
//       view2Link.click();
//   });
//
//   it('Should fliped to View2 and view2 should visible', () => {
//     expect(view2.isPresent()).toBeTruthy();
//   });
//
//   it('Should fliped to View2 and view1 should not visible', () => {
//     expect(view1.isPresent()).toBeFalsy();
//   });
//
//   it('Should fliped to View2 and should have body content as expected',  () => {
//       expect(view2.getText()).toEqual('I am view two component');
//   });
//
//   it('Should flipped to View1 again and should visible', () => {
//     let view1Link = element(by.linkText('View1'));
//     view1Link.click();
//     expect(view1.isPresent()).toBeTruthy();
//     expect(view2.isPresent()).toBeFalsy();
//   });
// });

describe('Given should test the search result in details view', () => {

  beforeEach(() => {
    browser.get('members');
    let searchButton = element(by.css('form button'));
    let searchBox = element(by.css('form input'));
    searchBox.sendKeys('Thomas');
    searchButton.click();
    let resultItem = element(by.linkText('Carolina Hess'));
    resultItem.click();
  });

  it('should be load the person details page', () => {
    var resultDetail = element(by.css('#personDetails'))
    expect(resultDetail.isDisplayed()).toBeTruthy();
  });

});
