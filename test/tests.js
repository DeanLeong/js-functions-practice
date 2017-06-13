describe('JavaScript Functions Lab', () => {
  describe('#maxOfTwoNumbers()', () => {
    it('should return the max of 2 numbers if the first is smaller', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ASSERT
      const actual = maxOfTwoNumbers(smaller, larger);

      // ACT
      expect(actual).to.eql(expected);
    });

    it('should return the max of 2 numbers if the first is larger', () => {
      // ARRANGE
      const smaller = -40;
      const larger = 5000;
      const expected = larger;

      // ASSERT
      const actual = maxOfTwoNumbers(larger, smaller);

      // ACT
      expect(actual).to.eql(expected);
    });
  });

  describe('#maxOfThree()', () => {
    it('should return the max of 3 numbers if the last is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = maxOfThree(first, second, largest);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should return the max of 3 numbers if the first is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = maxOfThree(largest, first, second);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should return the max of 3 numbers if the middle is the largest', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;
      const largest = 10000;
      const expected = largest;

      // ASSERT
      const actual = maxOfThree(first, largest, second);

      // ACT
      expect(actual).to.eql(expected);
    });


    it('should fail if not given three arguments', () => {
      // ARRANGE
      const first = -40;
      const second = 5000;

      // ASSERT

      // ACT
      expect(() => maxOfThree(first, second)).to.throw();
    });
  });

  describe('#isCharacterAVowel()', () => {
    it('should return a boolean', () => {

    });
  });
});
