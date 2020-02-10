const searchViaLinks = require("./script");

const dbMock = [
  "cats.com",
  "dogs.com",
  "animals.com",
  "nocats.net",
  "smartdogs.org",
  "mypets.com",
  "catamania.com"
];

it("simpliest test without conditions", () => {});

describe("searchViaLinks", () => {
  it("with invalid values", () => {
    expect(searchViaLinks(dbMock, null)).toEqual([]);
    expect(searchViaLinks(dbMock, undefined)).toEqual([]);
  });

  it("with valid values", () => {
    expect(searchViaLinks(dbMock, "dogs")).toEqual([
      "dogs.com",
      "smartdogs.org"
    ]);
    expect(searchViaLinks(dbMock, "dummy")).toEqual([]);
  });

  it("it shouldn't return more than 3 matches", () => {
    expect(searchViaLinks(dbMock, "cat").length).toEqual(3);
    expect(searchViaLinks(dbMock, ".com").length).toEqual(3);
  });
});
