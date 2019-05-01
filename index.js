const convertHTML = (str) => {
//  First method using regEx
//
//  str = str.replace(/&/g,'&amp;')
//           .replace(/</g,'&lt;')
//           .replace(/>/g,'&gt;')
//           .replace(/"/g,'&quot;')
//           .replace(/'/g,"&apos;");

// Add second method using object and map
  htmlEntities={
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(item => htmlEntities[item] || item).join('');
}

// test here
console.log(convertHTML("Dolce & Gabbana"))
