// This handler simply passes through the arguments of the mutation through as the result
export function request() {
  return {}
}

/**
 * @param {import('@aws-appsync/utils').Context} ctx
 */
export function response(ctx: { args: unknown}) {
  return ctx.args
}