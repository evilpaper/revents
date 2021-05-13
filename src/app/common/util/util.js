export function delay(ms) {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, ms);
  });
}
