const paginate = (followers) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = [];

  for (let pageIndex = 0; pageIndex < numberOfPages; pageIndex++) {
    const start = pageIndex * itemsPerPage;
    const pageFollowers = followers.slice(start, start + itemsPerPage);
    newFollowers.push(pageFollowers);
  }

  return newFollowers;
};

export default paginate;
