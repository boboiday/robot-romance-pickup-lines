const line =
  "I clicked every bicycle in your CAPTCHA and I'd do it again — because the only box I actually want to tick is the one that says I'm not a robot, I'm yours.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

if (line.split("\n").length !== 1 || line.split("\r").length !== 1) {
  throw new Error("entry must be exactly one line");
}

// Print exactly one line to stdout.
console.log(line);
