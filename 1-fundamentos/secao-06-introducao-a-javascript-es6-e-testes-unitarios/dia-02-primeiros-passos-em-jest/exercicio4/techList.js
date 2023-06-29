function techList(array, name) {
  try {
    if (array.length === 0) {
      throw new Error('Vazio!');
    }
    const list = array.sort();
    const result = [];
    for (const item of list) {
      const tech = {
        tech: item,
        name: name,
      };
      result.push(tech);
    }
    return result;
  } catch (error) {
    return error.message;
  }
}

module.exports = { techList };
