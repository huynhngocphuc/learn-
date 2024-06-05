const path = require("path");
const pathName = "/Nodejs/path/testPath.txt";
console.log("🚀 ~ path:", path.basename(pathName));
// --> testPath.txt

console.log("🚀 ~ path:", path.basename(pathName, ".txt"));
// --> testPath

console.log("🚀 ~ path:", path.dirname(pathName));
// --> /Nodejs/path

console.log("🚀 ~ path:", path.extname(pathName));
// --> .txt

console.log(
  "🚀 ~ path:",
  path.join("account", "fullName", "lastName", "Phuc.txt")
);

// --> account\fullName\lastName\Phuc.txt

console.log(
  "🚀 ~ path:",
  path.resolve("account", "fullName", "lastName", "Phuc.txt")
);

// --> C:\C\Code\learn-js\Nodejs\path\account\fullName\lastName\Phuc.txt

console.log("🚀 ~ path:", path.parse(pathName));

/* --> {
  root: '/',
  dir: '/Nodejs/path',
  base: 'testPath.txt',
  ext: '.txt',
  name: 'testPath'
} */

console.log(
  "🚀 ~ path:",
  path.format({
    root: "/",
    dir: "/Nodejs/path",
    base: "testPath.txt",
    ext: ".txt",
    name: "testPath",
  })
);

// --> /Nodejs/path\testPath.txt

console.log(
  "🚀 ~ path:",
  path.isAbsolute('home/user/dir/file.txt')
);
console.log(
  "🚀 ~ path:",
  path.isAbsolute('Phuc.txt')
);
// --> account\fullName\lastName\Phuc.txt