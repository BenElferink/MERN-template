import Account from '../models/Account.js';
// more about response status codes   --->   https://restapitutorial.com/httpstatuscodes.html

export async function registerAccount(request, response, next) {
  try {
    // Handle your logic here...

    // return something to the client-side
    response.status(201).json({ message: 'Account registered' });
  } catch (error) {
    console.error(error);
    response.status(500).send();
  }
}

export async function loginAccount(request, response, next) {
  try {
    // Handle your logic here...

    // return something to the client-side
    response.status(200).json({ message: 'Account logged-in' });
  } catch (error) {
    console.error(error);
    response.status(500).send();
  }
}

export async function getAccount(request, response, next) {
  try {
    // Handle your logic here...

    // return something to the client-side
    response.status(200).json({ message: 'Account fetched' });
  } catch (error) {
    console.error(error);
    response.status(500).send();
  }
}
