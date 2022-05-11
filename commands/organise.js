const organiseFn = (dirname) => {
  console.log(
    "organise command executed", dirname != undefined ? dirname : process.cwd()
  );
};

module.exports = {
  organiseFn,
};
