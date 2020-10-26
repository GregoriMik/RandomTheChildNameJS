// Wybieranie imienia dla dziecka

const btn = document.querySelector('button');

const div = document.querySelector('div')

const names = ["Jagieńka","Dobrawa","Daria","Asia","Kira","Marysia","Anastazja","Monika"];

const prefixs =["Nie wiem, to Ty musisz wybrać ","Wydaje mi się,","Mam wrażenie","Szczerze powiedziawszy, myślę","Myślę więc"]

const index = Math.floor(Math.random() * 7);
  // console.log(names[index]);

const nameGenerator =()=>{
  const indexName = Math.floor(Math.random() * names.length);

  const indexPrefix = Math.floor(Math.random() * prefixs.length);

div.textContent =`${prefixs[indexPrefix]} żę najlepsze będzie imię ${names[indexName]}`}
btn.addEventListener('click',nameGenerator)

