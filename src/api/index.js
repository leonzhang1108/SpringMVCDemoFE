import fetch from 'util/fetch'


export default {
  getUser: () => new Promise(function(resolve, reject) {
    fetch.get('/api/user/showUser').then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
