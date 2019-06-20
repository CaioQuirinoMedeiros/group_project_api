'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ProjectController {
  async index ({ request }) {
    const projects = await request.team.projects().fetch()

    return projects
  }

  async store ({ request }) {
    const data = request.only(['title'])
    const project = request.team.projects().create(data)

    return project
  }

  async show ({ params, request }) {
    const project = await request.team
      .projects()
      .where('id', params.id)
      .first()

    return project
  }

  async update ({ params, request }) {
    const project = await request.team
      .projects()
      .where('id', params.id)
      .first()

    const data = request.only(['title'])

    project.merge(data)

    await project.save()

    return project
  }

  async destroy ({ params, request }) {
    const project = await request.team
      .projects()
      .where('id', params.id)
      .first()

    await project.delete()
  }
}

module.exports = ProjectController
