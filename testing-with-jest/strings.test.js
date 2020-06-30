const utils = require("./strings");

describe("byteLength", () => {
  it("German(2 bytes per character)", () => {
    expect(utils.byteLength("üäüäüäüäüä")).toEqual(20);
    expect(utils.byteLength("üä,üä üä")).toEqual(14);
  });

  it("3/4 bytes per character", () => {
    expect(utils.byteLength("⤀⦀⨀")).toEqual(9);
    expect(utils.byteLength("😀😀😀😀😀")).toEqual(20);
    expect(utils.byteLength("😀😀 😀😀,😀!")).toEqual(23);
  });

  it("Chinese", () => {
    expect(utils.byteLength("你好吗")).toEqual(9);
    expect(utils.byteLength("象形许慎")).toEqual(12);
  });

  it("Russian", () => {
    expect(utils.byteLength("Привет")).toEqual(12);
    expect(utils.byteLength("До свиданья")).toEqual(21);
  });
});

describe("byteLengthImproved", () => {
  it("German(2 bytes per character)", () => {
    expect(utils.byteLengthImproved("üäüäüäüäüä")).toEqual(20);
    expect(utils.byteLengthImproved("üä,üä üä")).toEqual(14);
  });

  it("3/4 bytes per character", () => {
    expect(utils.byteLengthImproved("⤀⦀⨀")).toEqual(9);
    expect(utils.byteLengthImproved("😀😀😀😀😀")).toEqual(20);
    expect(utils.byteLengthImproved("😀😀 😀😀,😀!")).toEqual(23);
  });

  it("Chinese", () => {
    expect(utils.byteLengthImproved("你好吗")).toEqual(9);
    expect(utils.byteLengthImproved("象形许慎")).toEqual(12);
  });

  it("Russian", () => {
    expect(utils.byteLengthImproved("Привет")).toEqual(12);
    expect(utils.byteLengthImproved("До свиданья")).toEqual(21);
  });
});

describe("limitToByteLength", () => {
  it("German(2 bytes per character)", () => {
    expect(utils.limitToByteLength("üäüäüäüäüä", 4)).toEqual("üä");
    expect(utils.limitToByteLength("üäüäüäüäüä", 5)).toEqual("üä");
    expect(utils.limitToByteLength("üä,üä", 5)).toEqual("üä,");
    expect(utils.limitToByteLength("üä,üä", 6)).toEqual("üä,");
    expect(utils.limitToByteLength("üä,üä", 7)).toEqual("üä,ü");
  });

  it("3/4 bytes per character", () => {
    expect(utils.limitToByteLength("😀😀😀😀😀", 4)).toEqual("😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 5)).toEqual("😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 6)).toEqual("😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 7)).toEqual("😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 8)).toEqual("😀😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 9)).toEqual("😀😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 10)).toEqual("😀😀");
    expect(utils.limitToByteLength("😀😀😀😀😀", 11)).toEqual("😀😀");
  });

  it("Chinese", () => {
    expect(utils.limitToByteLength("象形许慎你好吗", 0)).toEqual("");
    expect(utils.limitToByteLength("象形许慎你好吗", 1)).toEqual("");
    expect(utils.limitToByteLength("象形许慎你好吗", 2)).toEqual("");
    expect(utils.limitToByteLength("象形许慎你好吗", 3)).toEqual("象");
    expect(utils.limitToByteLength("象形许慎你好吗", 4)).toEqual("象");
    expect(utils.limitToByteLength("象形许慎你好吗", 5)).toEqual("象");
    expect(utils.limitToByteLength("象形许慎你好吗", 6)).toEqual("象形");
    expect(utils.limitToByteLength("象形许慎你好吗", 7)).toEqual("象形");
    expect(utils.limitToByteLength("象形许慎你好吗", 8)).toEqual("象形");
    expect(utils.limitToByteLength("象,形,许慎你好吗", 7)).toEqual("象,形");
    expect(utils.limitToByteLength("象,形,许慎你好吗", 8)).toEqual("象,形,");
  });

  it("Russian", () => {
    expect(utils.limitToByteLength("Привет", 6)).toEqual("При");
  });
});
