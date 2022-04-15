export default function getProperty(obj) {
  const result = [];
  const { special } = obj;
  for (let i = 0; i < special.length; i += 1) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = special[i];
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}

// export default function getProperty(obj) {
//   const result = [];
//   const { special } = obj;

//   special.forEach((a) => {
//     // eslint-disable-next-line no-prototype-builtins
//     if (a.hasOwnProperty('description')) {
//       result.push(a);
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a.description = 'Описание недоступно';
//       result.push(a);
//     }
//   });
//   return result;
// }
