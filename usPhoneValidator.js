function telephoneCheck(str) {
  const valid_regex =
    /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
  if (str.match(valid_regex)) return true;
  return false;
}

telephoneCheck("555-555-5555");
console.log(telephoneCheck("1(555)555-5555"));
