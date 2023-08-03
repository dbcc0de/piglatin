const { translate, regExTranslate } = require("../src/piglatin");

describe("translate function", () => {
  test("words that start with vowels", () => {
    expect(translate("apple")).toBe("appleway");
    expect(translate("expect")).toBe("expectway");
    expect(translate("ink")).toBe("inkway");
    expect(translate("ocean")).toBe("oceanway");
    expect(translate("under")).toBe("underway");
  });

  test("words that start with one consonant", () => {
    expect(translate("cooler")).toBe("oolercay");
    expect(translate("dingo")).toBe("ingoday");
  });
  test("words that start with two consonants", () => {
    expect(translate("skills")).toBe("illsskay");
  });
  test("starts w three consonants", () => {
    expect(translate("school")).toBe("oolschay");
  });
  test("has mix of cases, returns lowercase", () => {
    expect(translate("guArD")).toBe("uardgay");
  });

  test("contains punctuation", () => {
    expect(translate("Flor.ida.man")).toBe("or.ida.manflay");
    expect(translate("doesn't")).toBe("oesn'tday");
    expect(translate("could,not")).toBe("ould,notcay");
  });

  test("contains numbers or symbols", () => {
    expect(translate(189)).toBe(189);
    expect(translate("dill@gmail")).toBe("dill@gmail");
  });

  // test("contains a space", () => {
  //   expect(translate("Have a wonderful day")).toBe(
  //     "avehay away onderfulway ayday"
  //   );
  //   expect(translate("good golly apple")).toBe("oodgay ollygay appleway");
  // });
});

describe("regExpFunction", () => {
  test("words that start with a vowel", () => {
    expect(regExTranslate("apple")).toBe("appleway");
    expect(regExTranslate("expect")).toBe("expectway");
    expect(regExTranslate("ink")).toBe("inkway");
    expect(regExTranslate("ocean")).toBe("oceanway");
    expect(regExTranslate("under")).toBe("underway");
  });
  test("words that start with one consonant", () => {
    expect(regExTranslate("cooler")).toBe("oolercay");
    expect(regExTranslate("dingo")).toBe("ingoday");
  });
  test("words that start with two consonants", () => {
    expect(regExTranslate("skills")).toBe("illsskay");
  });
  test("starts w three consonants", () => {
    expect(regExTranslate("school")).toBe("oolschay");
  });
  test("has mix of cases, returns lowercase", () => {
    expect(regExTranslate("guArD")).toBe("uArDgay");
  });

  test("contains punctuation", () => {
    expect(regExTranslate("Flor.ida.man")).toBe("or.ida.manFlay");
    expect(regExTranslate("doesn't")).toBe("oesn'tday");
    expect(regExTranslate("could,not")).toBe("ould,notcay");
  });

  test("contains numbers or symbols", () => {
    expect(regExTranslate("189")).toBe("189");
    expect(regExTranslate("dill@gmail")).toBe("dill@gmail");
  });

  test("contains a space", () => {
    expect(regExTranslate("Have a wonderful day")).toBe(
      "aveHay away onderfulway ayday"
    );
    expect(regExTranslate("good golly apple")).toBe("oodgay ollygay appleway");
  });

  test("case sensitive, keeps case", () => {
    expect(regExTranslate("caMelUppEr")).toBe("aMelUppErcay");
  });
});
