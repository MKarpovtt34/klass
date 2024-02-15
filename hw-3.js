let sumSalaries = 0;
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

for (const key in salaries) {           //цикл поиска ключей в переменной salaries
  sumSalaries += salaries[key];         //если результат true приравнивает результат ключа в переменную sumSalaries
}

console.log(sumSalaries);

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
  length: 500,
};

function multiplyNumeric(obj) {              //принимает обьект в виде аргумента
  
  for (let key in obj) {                     //цикл поиска ключей в передаваемом аргументе
   if (typeof obj[key] == "number") {        //если тип значения ключа равен строке number , то умножает значение на 2
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
