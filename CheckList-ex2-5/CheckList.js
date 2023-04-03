function thisOrdered(list) {
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        return false;
      }
    }
    return true;
  }

export default thisOrdered

// Essa função verificando se cada elemento é menor ou igualao próximo.
//   Se encontrar um elemento maior que o próximo,retorna false.
//  Se terminar de percorrer a lista sem 
//   encontrar elementos fora de ordem, retorna true