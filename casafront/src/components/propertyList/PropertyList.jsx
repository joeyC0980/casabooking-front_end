import useFetch from "../../hooks/useFetch";
import "./propertyList.css";
import StripeContainer from '../payment/StripeContainer';

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://www.hilton.com/im/en/NYCCNCI/15392706/park-view-apartment-living-room-resized.jpg?impolicy=crop&cw=4900&ch=2932&gravity=NorthWest&xposition=0&yposition=167&rw=528&rh=316",
    "https://img.zumpercdn.com/486165561/1280x960?auto=format",
    "https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3259&gravity=NorthWest&xposition=0&yposition=36&rw=2048&rh=1336",
    "https://villa-new-york-4-bdr-pool-luxury-villa-next-to-the-forge-bali.hotelsseminyak.net/data/Imgs/970x410/11499/1149984/1149984382/img-villa-new-york-4-bdr-pool-luxury-villa-next-to-the-forge-bali-seminyak-bali-21.JPEG",
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