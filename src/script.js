// Startvärde för saldo
let balance = 0;

// Hämta element från HTML
const descInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");

const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList");

const balanceEl = document.querySelector("#balance");

// Funktion som körs när man lägger till något
function handleTransaction(type) {
  const desc = descInput.value;
  const amount = amountInput.value;

  // Validering: tomt eller inte en siffra → gör inget
  if (desc === "" || amount === "" || isNaN(amount)) {
    return;
  }

  const numAmount = Number(amount);
  const li = document.createElement("li");

  // Om det är inkomst
  if (type === "income") {
    li.textContent = `${desc} - ${numAmount} kr (Inkomst)`;
    incomeList.appendChild(li);
    balance += numAmount;
  } 
  // Om det är utgift
  else {
    li.textContent = `${desc} - ${numAmount} kr (Utgift)`;
    expenseList.appendChild(li);
    balance -= numAmount;
  }

  // Uppdatera saldo på sidan
  balanceEl.textContent = balance;

  // Töm inputfälten
  descInput.value = "";
  amountInput.value = "";
}

// Event listeners
incomeBtn.addEventListener("click", () => {
  handleTransaction("income");
});

expenseBtn.addEventListener("click", () => {
  handleTransaction("expense");
});