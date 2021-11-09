export const formatUppercase = (text) => {
  const words = text.split("-");
  let res = [];
  for (const word of words) {
    const tmp = word[0].toUpperCase();
    res.push(tmp + word.slice(1));
  }
  return res.join(" ");
};
