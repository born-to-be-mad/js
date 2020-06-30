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
