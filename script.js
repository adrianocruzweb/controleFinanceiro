const Modal = {
  openModal() {
    document.querySelector('.modal-overlay')
      .classList.add('active')
  },
  closeModal() {
    document.querySelector('.modal-overlay')
      .classList.remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '02/02/2021',
  },
  {
    id: 2,
    description: 'Criação Web Site',
    amount: 500000,
    date: '02/02/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '02/02/2021',
  },
]

const Transaction = {
  incomes() {

  },
  expenses() {

  },
  total() {

  }
}

const DOM = {
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction()
  },

  innerHTMLTransaction () {
    const html = `
      <td class="description">Luz</td>
      <td class="expense">R$ -500,00</td>
      <td class="date">23/01/2021</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação">
      </td>
    `
    return html
  }
}

DOM.addTransaction(transactions[0])
DOM.addTransaction(transactions[1])
DOM.addTransaction(transactions[2])