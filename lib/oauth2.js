export const redirectUri = (type, query) => {
  switch (type) {
    case 'facebook':
      return `https://www.facebook.com/dialog/oauth?${query}`
    case 'google':
      return `https://accounts.google.com/o/oauth2/v2/auth?${query}`
    case 'line':
      return `https://access.line.me/oauth2/v2.1/authorize?${query}`
    case 'github':
      return `https://github.com/login/oauth/authorize?${query}`
  }
}


export const config = {
  // facebook: {
  //   scope: 'email',
  //   response_type: 'code',
  //   redirect_uri: process.env.facebook.redirect_uri,
  //   client_id: process.env.facebook.client_id
  // },
  google: {
    scope: 'email profile',
    response_type: 'code',
    redirect_uri: process.env.REDIRECT_URI,
    client_id: process.env.GOOGLE_AUTH_CLIENT_ID
  },
  line: {
    state: 'login',
    scope: 'profile%20openid',
    response_type: 'code',
    redirect_uri: process.env.REDIRECT_URI,
    client_id: process.env.AUTH_LINE_CLIENT_ID,
    nonce: '09876xyz'
  },
 
  // https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1655556831&redirect_uri=http://localhost:3000&state=login&scope=profile%20openid%20email&nonce=09876xyz
  // const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${process.env.AUTH_LINE_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&state=login&scope=profile%20openid%20email&nonce=09876xyz`

  // github: {
  //   scope: 'user',
  //   response_type: 'code',
  //   redirect_uri: process.env.github.redirect_uri,
  //   client_id: process.env.github.client_id
  // }
}
