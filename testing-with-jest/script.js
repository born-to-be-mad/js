const links = [
  "cats.com",
  "cats-and-dogs.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavouritecats.com",
  "souprecipies.com"
];

const searchViaLinks = (urls, searchInput) => {
  //result array
  const matches = urls.filter(website => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(searchViaLinks(links, "cat"));

module.exports = searchViaLinks;
