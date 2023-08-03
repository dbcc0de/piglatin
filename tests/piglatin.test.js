const { translate } = require("../src/piglatin");

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

  test("contains a space", () => {
    expect(translate("Have a wonderful day")).toBe(
      "avehay away onderfulway ayday"
    );
    expect(translate("good golly apple")).toBe("oodgay ollygay appleway");
  });
});
