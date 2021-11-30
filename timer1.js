const timers = process.argv.slice(2);

for (let i = 0; i < timers.length; i++) {
  if (timers[i] < 0 || isNaN(Number(timers[i]))) {
    continue;
  }
  const t = timers[i] * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, t);
}