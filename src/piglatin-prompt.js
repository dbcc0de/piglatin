const promptly = require("promptly");

(async () => {
  const name = await promptly.prompt("Name: ");
  console.log(name);
})();
