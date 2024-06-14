export const Log = (e) => {
  process.env.VUE_APP_DEV === 'true' ? console.log(e) : null
}

export const Error = (e) => {
  process.env.VUE_APP_DEV === 'true' ? console.error(e) : null
}