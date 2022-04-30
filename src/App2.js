import './App.css';
import { getDefaultProvider, } from "ethers"
import { NftProvider, useNft } from "use-nft"


const ethersConfig = {
  provider: getDefaultProvider("homestead"),
}


function App2() {
  return (
    <NftProvider fetcher={["ethers", ethersConfig]}>
      <Nft address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" id="100" />
      <Nft address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" id="102" />
      <FetchAll address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"/>
    </NftProvider>
  )
}

function FetchAll(props){
  return [...Array(100).keys()].map((key)=>{ 
    return <Nft address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" id={key} />
  })
}


// useNft() is now ready to be used in your app. Pass
// the NFT contract and token ID to fetch the metadata.
function Nft(props) {
  const { loading, error, nft } = useNft(
    props.address,
    props.id
  )

  // nft.loading is true during load.
  if (loading) return <>Loading…</>

  // nft.error is an Error instance in case of error.
  if (error || !nft) return <>Error.</>

  // You can now display the NFT metadata.

  console.log("NFT", nft);
  return (
    <section>
      <h1>{nft.name}</h1>
      <img src={nft.image} alt="" />
      <p>{nft.description}</p>
      <p>Owner: {nft.owner}</p>
    </section>
  )
}

export default App2;
