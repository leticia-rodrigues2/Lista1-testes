function orderedList(list) {
    if (list.length < 2) {
      return true;
    }
  
    let growing = list.slice(1).every((el, i) => el >= list[i]);
    let descending = list.slice(1).every((el, i) => el <= list[i]);
  
    return growing || descending;
  }
  export default orderedList