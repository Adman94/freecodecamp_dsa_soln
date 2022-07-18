function palindrome(str) {
  let clean_str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(clean_str);
  let rev_str_arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rev_str_arr.push(clean_str[i]);
  }
  let rev_str = rev_str_arr.join("");
  console.log(rev_str);

  if (clean_str === rev_str) return true;
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
