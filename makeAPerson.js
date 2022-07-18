const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  };
  this.getFirstName = function() {
    let nameArr = firstAndLast.split(' ');
    let firstName = nameArr[0];
    return firstName;
  }
  this.getLastName = function() {
    let nameArr = firstAndLast.split(' ');
    let lastName = nameArr[1];
    return lastName;
  }
  this.setFirstName = function(first) {
    let nameArr = firstAndLast.split(' ');
    nameArr[0] = first;
    firstAndLast = nameArr.join(' ')
  }
  this.setLastName = function(last) {
    let nameArr = firstAndLast.split(' ');
    nameArr[1] = last;
    firstAndLast = nameArr.join(' ')
  }
  this.setFullName = function(fAL) {
    firstAndLast = fAL;
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFullName("Alan Turing")
console.log(bob.getFullName());