class TicketsService {
  constructor() {
    this.tickets = [];
  }

  findTickets() {
    return this.tickets;
  }

  setTickets(ticketsArr) {
    ticketsArr.forEach((ticket) => {
      this.tickets.push(ticket);
    });
  }
}

// Instance unique (singleton)
const serviceInstance = new TicketsService();

// Fonctions liées à cette instance
function findTickets() {
  return serviceInstance.findTickets();
}

function setTickets(tickets) {
  serviceInstance.setTickets(tickets);
}

module.exports = {
  findTickets,
  setTickets,
};
