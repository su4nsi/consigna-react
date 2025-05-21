export function paginateArray(array, pageSize = 20) {
  const result = [];
  for (let i = 0; i < array.length; i += pageSize) {
    result.push(array.slice(i, i + pageSize));
  }
  return result;
}
