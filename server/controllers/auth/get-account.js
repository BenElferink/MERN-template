const Account = require('../../models/Account')

async function getAccount(request, response, next) {
  try {
    const {uid} = request.auth

    // Get account from DB, existance not verified because we are already authorized at this point
    const foundAccount = await Account.findOne({_id: uid}).select('-password')

    response.status(200).json({
      message: 'Account fetched',
      data: foundAccount,
    })
  } catch (error) {
    console.error(error)
    response.status(500).send()
  }
}

module.exports = getAccount
