const getNavItems = auth => {
  const items = [
    {
      linkTo: "/",
      text: "Home",
    },
    {
      linkTo: "/psychologists",
      text: "Psychologists",
    },
    {
      linkTo: "/favorites",
      text: "Favorites",
    },
  ];

  return auth ? items : items.slice(0, -1);
};

export default getNavItems;
