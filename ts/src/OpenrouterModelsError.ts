
import { Context } from './Context'


class OpenrouterModelsError extends Error {

  isOpenrouterModelsError = true

  sdk = 'OpenrouterModels'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OpenrouterModelsError
}

