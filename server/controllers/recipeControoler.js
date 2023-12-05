const homepageHandler = async (req, res) => {
  res.render("index", { title: "Cooking Blog - Home" });
};

export { homepageHandler };
