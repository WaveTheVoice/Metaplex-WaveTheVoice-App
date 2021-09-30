import { Connection, clusterApiUrl } from '@solana/web3.js'
import { mintNFT, Creator } from '@oyster/just-minting'

const getImageFile = () => {
  const imageUrl = 'https://picsum.photos/id/237/536/354'

  return fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => new File([blob], 'dog.jpg'))
}

const metaData = {
  name: 'Minf fn export test',
  symbol: '',
  creators: [
    new Creator({
      address: 'H8HBRm8tCTfZWV8J2q3sZZo8krHe1474qjgW95Y48Eer',
      verified: true,
      share: 100
    })
  ],
  description: 'DOG',
  sellerFeeBasisPoints: 0,
  image: 'dog.jpg',
  attributes: [],
  external_url: '',
  properties: {
    files: [
      {
        uri: 'dog.jpg',
        type: 'image/jpeg'
      }
    ],
    category: 'image'
  }
}

export const testMint = async (wallet) => {
  const connection = new Connection(clusterApiUrl('devnet'), 'recent')
  const file = await getImageFile()
  const files = [file]
  const env = 'devnet'
  const maxSupply = 1

  await mintNFT(connection, wallet, env, files, metaData, maxSupply)
}
