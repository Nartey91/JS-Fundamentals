const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (firstArg === undefined) {
  console.log("No argument");
} else if (secondArg === undefined) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
