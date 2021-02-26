let balance = {
    incomes: [2500.00, 3201.23, 359.24],
    expenses: [180.45, 127.64, 90.50, 725.35],
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;
    }

    return total;
}


function balanceAmount () {
    const totalIncomes = sum(balance.incomes);
    const totalExpenses = sum(balance.expenses);
    const totalBalance = totalIncomes - totalExpenses;
    const totalBalanceFixed = totalBalance.toFixed(2);
    
    const positiveBalance = totalBalanceFixed >= 0; 
    2500.00, 3201.23, 359.24
    let balanceText = "Negative"

    if (positiveBalance) {
        balanceText = "Positive"
    }

    console.log(`Your balance is ${balanceText}: R$${totalBalanceFixed}`);
}

balanceAmount();