import request from 'superagent'

const serverURL = 'https://picsum.photos/'

export function getImage() {
  console.log('api')
  return request
    .get('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.body)
}
