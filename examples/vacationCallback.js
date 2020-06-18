function applyForVisa(document, onApprove, onDecline) {
  console.log('Apply for visa...');
  setTimeout(() => {
    const id = Math.random();
    id > 0.5 ? onApprove(id) : onDecline('Visa declined!');
  }, 2000);
}

function buyTickets(visaId, onApprove, onDecline) {
  console.log(`Buying tickets with visa ${visaId}...`);
  Math.random() > 0.5 ? onApprove(123) : onDecline('Tickets unavailable!');
}

function bookHotel(ticketDate) {
  console.log(`Hotel booked for date ${ticketDate}...`);
}

applyForVisa('123', (visaId) => {
  console.log('Visa approved')
  buyTickets(visaId,
    () => {
      console.log('Tickets bought')
      bookHotel();
    }, console.error);
}, console.error);

function download(url) {
  return new Promise(function(resolve, reject) {
    // big code for downloading...
    let isDownloadSuccessful = Math.random() > 0.5;
    if (isDownloadSuccessful) {
      resolve('Downloaded 😊');
    } else {
      reject('Not downloaded 🙄');
    }
  });
}

download('...')
  .then(console.log)
  .catch(console.error);