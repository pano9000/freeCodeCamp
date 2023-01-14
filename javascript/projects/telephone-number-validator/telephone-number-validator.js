function telephoneCheck(str) {
  const telRegV2= /^1?(\s|-)?(\((?=\d{3}\)))?\d{3}((?<=\(\d{3})\))?(\s|-)?\d{3}(\s|-)?\d{4}$/
  return telRegV2.test(str);
}