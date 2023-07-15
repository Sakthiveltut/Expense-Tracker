const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const dummyTransactions = [
    {id:1, text:'Grocery', amount:-2000},
    {id:2, text:'Salary', amount:10000},
    {id:3, text:'Cinema', amount:-1000},
    {id:4, text:'Trip', amount:-3000},
    {id:5, text:'dinner', amount:-500},
]

let transactions = dummyTransactions;

function addTransactionDom(transcation){
    const sign = transcation.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(transcation.amount < 0 ? 'minus' : 'plus')
    item.innerHTML = ` 
    ${transcation.text} 
    <span>${sign} ${Math.abs(transcation.amount)}</span>
    <button class="delete-btn"> x </button>`;

    list.append(item)
}

function updateValue(){
    const amounts = transactions.map(transcation => transcation.amount)
    const total = amount.reduce((acc,item) => (acc += item), 0).toFixed(2)

    const income = amounts
                    .filter((item) => (item > 0))
                    .reduce((acc,item) => (acc+=item),0)
                    .toFixed(2)

    balance.innerHTML = total > 0 ? total : 0;
    money_plus.innerHTML = income;

}

function init(){
    list.innerHTML = ""
    transactions.forEach(addTransactionDom)
    updateValue()
}

init()
