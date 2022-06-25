const spinning = [
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\n",
];

let delay = 0;
for (const spin of spinning) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
}
