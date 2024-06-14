export const Log = (e) => {
  process.env.VUE_APP_DEV ? console.log(e) : null
}

export const Error = (e) => {
  process.env.VUE_APP_DEV ? console.error(e) : null
}