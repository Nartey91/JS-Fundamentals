function add(a, b) {
  // your function if needed, but here you want square printing
}

const size = process.argv[2];
const n = parseInt(size);

if (!n || n <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < n; i++) {
    console.log("X".repeat(n));
  }
}
