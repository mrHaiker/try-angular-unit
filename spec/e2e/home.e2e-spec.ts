import {browser, element, by} from "protractor";

describe('Given I am posting a new comment', () => {
    describe('When I push the submit button', () => {
      beforeEach(() => {
          //Assemble
          browser.get('');
          const commentInput = element(by.css('input'));
          commentInput.sendKeys('a sample comment');

          //Act
          const submitButton =  element(by.buttonText('Submit')).click();
      });

       //Assert
      it('Should then add the comment', () => {
          const comment = element.all(by.css('li')).first();
          expect(comment.getText()).toBe('a sample comment');
      });
    });
});
