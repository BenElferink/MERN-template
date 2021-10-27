const Account = require('../../models/Account')
const { signToken } = require('../../middlewares/jsonwebtoken')

async function loginWithToken(request, response, next) {
  try {
    const { uid } = request.auth

    // Get account from DB, existance not verified because we are already authorized at this point
    const foundAccount = await Account.findOne({ _id: uid }).select('-password')

    // Generate access token
    const token = signToken({ uid: foundAccount._id, role: foundAccount.role })

    response.status(200).json({
      message: 'Account fetched',
      data: foundAccount,
      token,
    })
  } catch (error) {
    console.error(error)
    response.status(500).send()
  }
}

module.exports = loginWithToken
