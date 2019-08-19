function filterByBreedAndSubBreed(breeds, breedSearch, subBreedSearch) {
  breeds = breeds.filter(item => {
    return (
      item.name.toLowerCase().startsWith(breedSearch) &&
      item.subBreeds.filter(subItem => {
        return subItem.toLowerCase().startsWith(subBreedSearch);
      })
    );
  });
  breeds = breeds.map(breed => {
    breed.subBreeds = breed.subBreeds.filter(item => {
      return item.toLowerCase().startsWith(subBreedSearch);
    });
    return breed;
  });
  return breeds;
}

function filterBySubBreed(breeds, subBreedSearch) {
  breeds = breeds.filter(item => {
    return (
      item.subBreeds.filter(subItem => {
        return subItem.toLowerCase().startsWith(subBreedSearch);
      }).length > 0
    );
  });
  breeds = breeds.map(breed => {
    breed.subBreeds = breed.subBreeds.filter(item => {
      return item.toLowerCase().startsWith(subBreedSearch);
    });
    return breed;
  });
  return breeds;
}

export { filterBySubBreed, filterByBreedAndSubBreed };
