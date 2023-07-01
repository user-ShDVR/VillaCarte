export const randomString = ( length: number ) => {
  let abc = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let random = abc[ Math.floor( Math.random() * abc.length ) ];
  let newAbc = '';
  while ( newAbc.length < length ) {
    newAbc += random;
    random = abc[ Math.floor( Math.random() * abc.length ) ];
  }
  return newAbc;
};
