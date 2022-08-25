import { NhostClient } from '@nhost/nhost-js'

const nhost = new NhostClient({
  subdomain: 'mqpncefsnyqiuskhgktf',
  region: 'ap-south-1'
})

// const response2 = await nhost.auth.signUp({
//     email: 'pratimbhosale@gmail.com',
//     password: 'secret-password',
// options: {
//   allowedRoles: ['user']
// }
//   })

const response = await nhost.auth.signIn({
  email: 'pratimbhosale@gmail.com',
  password: 'secret-password',

})

const userId = response.session.user.id

console.log(userId)



const mutation = await nhost.graphql.request(`mutation {
  insert_note(objects: [{title: "My second Note"}]){
    affected_rows
  }
}
`,{},{headers: {'X-Hasura-Role': 'user','X-Hasura-User-Id':userId}})

console.log(mutation.error)