import { useState, useEffect } from "react";
import Videotab from "../components/videotab";
import Arweave from "arweave";

const arweave = Arweave.init({});
const Adweave = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [assets, setAssets] = useState([])
  const [cursor, setCursor] = useState("")
  const [hasNextPage, setHasNextPage] = useState(false)


  useEffect(() => {
    getAsset();
  },[]);

  const getAsset = async () => {
    console.log("kjfhg")
    const queryObject = {
      query: `
        {
            transactions(
              first: 9,
              after: "${cursor}",
              tags: [{ name: "Type", values: ["video"] }]
            )
            {
              pageInfo{
                hasNextPage
              }
          
              edges {
                cursor
                node {
                  id
                  owner {
                    address
                  }
                  tags {
                    name
                    value
                  }
                  block {
                    timestamp
                  }
                }
              }
            }
          }              
        `,
    };
    setIsLoading(true);
    const results = await arweave.api.post("/graphql", queryObject);
    if(results){
      console.log("res: " ,results);
      // console.log("pageInfo: " ,results.data.data.transactions.pageInfo.hasNextPage)
      // console.log("cursor: " ,results.data.data.transactions.edges[results.data.data.transactions.edges.length - 1].cursor)
      let temp = assets;
      setAssets(temp.concat(results.data.data.transactions.edges));
      setCursor(
        results.data.data.transactions.edges[
          results.data.data.transactions.edges.length - 1
        ].cursor
      );
      setHasNextPage(results.data.data.transactions.pageInfo.hasNextPage);
      setIsLoading(false);
    }

  };
  return (
    console.log("homePage")
    ,
    <>
      <div className="bg-slate-100">
        <div className="container mx-auto columns-3">
          {
            assets.map((asset, i)=>{
              return(
                <Videotab key={i} asset={asset} />
              )
            })
          }
          
        </div>
      </div>
    </>
  );
};

export default Adweave;
