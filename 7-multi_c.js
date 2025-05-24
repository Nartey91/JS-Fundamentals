const arg = process.argv[2];
const times = parseInt(arg);

if (!times || times <= 0) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < times; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
