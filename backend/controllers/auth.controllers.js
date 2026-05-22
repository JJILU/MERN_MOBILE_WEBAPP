// export multiple
// ===============
// export const function signIn = () => {} or export {}


const signUp = (req,res) => {
  return res.status(201).json({"success": "signed up!!"})
}

const signOut = (req,res) => {
  return res.status(200).json({"success": "signed out!!"})
}

const signIn = (req,res) => {
  return res.status(200).json({"success": "signed in!!"})
}


export {
  signUp,
  signIn,
  signOut
}
