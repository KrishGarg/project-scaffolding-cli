const conf = new (require("conf"))();

// Setting default projects.
conf.set("available-projects", {
  "vite-vanilla-tailwind": "KrishGarg/vite-vanillajs-tailwind-template#main",
  "vite-react-tailwind": "KrishGarg/vite-react-tailwind-jit-template#main",
});

module.exports = conf;
