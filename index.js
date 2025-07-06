d3.csv("./data/trends.csv").then(dataFlat => {
  const dataNested = {
    name: "Trends",
    children: Array.from(
      d3.group(dataFlat, d => d["Steep Category"], d => d["UX/UI Theme"]),
      ([category, themes]) => ({
        name: category,
        children: Array.from(themes, ([theme, keywords]) => ({
          name: theme,
          children: keywords.map(k => ({
            name: k["Keyword"],
            value: 1
          }))
        }))
      })
    )
  };

  console.log(dataNested); // check your structure here
});
