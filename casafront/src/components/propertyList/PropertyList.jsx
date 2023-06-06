import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://www.hilton.com/im/en/NYCCNCI/15392706/park-view-apartment-living-room-resized.jpg?impolicy=crop&cw=4900&ch=2932&gravity=NorthWest&xposition=0&yposition=167&rw=528&rh=316",
    "https://img.zumpercdn.com/486165561/1280x960?auto=format",
    "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
    "data:image/jpeg;base64,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",
    "https://cdn1.matadornetwork.com/blogs/1/2021/10/log-cabin-lake-ostego-upstate-new-york-cabins-940x704.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;