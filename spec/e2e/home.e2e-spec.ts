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
          // expect(comment.getText()).toBe('a sample comment like 0');
      });
    });

    describe('When I like a comment', () => {
      let firstComment = null;
      beforeEach(() => {

        //Assemble
        firstComment = element.all(by.css('li')).first();
        let likeButton = firstComment.element(by.buttonText('like'));

        //Act
        likeButton.click();
      });

      //Assert
      it('Should increase the number of likes to one', () => {
        let commentLikes = firstComment.element(by.css('#likes'));
        expect(commentLikes.getText()).toBe('1');
      });

      it('Should then add the comment', () => {
        let comments = element.all(by.css('li')).first();
        // expect(comments.getText()).toBe('a sample comment like 0');
      });
   });
});
