const studentRegister = (name, age) => {
  try {
    if (name == null || age == null) {
      throw new Error ('Todas as informações são necessárias');
    } else if (age < 18) {
      throw new Error ('Ops, infelizmente nesse momento você não pode fazer as aulas')
    } else {
      return `${name}, seja bem-vindo(a) à AuTrybe!`;
    }
  } catch (error) {
    return error.message
  }
}

console.log(studentRegister('Victor', 20))