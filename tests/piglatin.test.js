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
});
