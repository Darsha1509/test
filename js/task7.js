function createHolder(num){
  return {
    value: num,

    getValue: function(){
      return this.value
    },

    setValue: function(a){
      this.value = a;
    }
  }
}

const obj = createHolder(5);
console.log(obj.getValue());
obj.setValue(2);
console.log(obj.getValue());