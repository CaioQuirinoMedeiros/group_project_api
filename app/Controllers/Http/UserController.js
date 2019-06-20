'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {
  async store ({ request, response, auth }) {
    const data = await request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    const teamsQuery = Invite.query().where('email', data.email)
    const teams = await teamsQuery.pluck('team_id')

    if (teams.length) {
      await user.teams().attach(teams)

      await teamsQuery.delete()
    }

    const token = await auth.attempt(data.email, data.password)

    return token
  }
}

module.exports = UserController
