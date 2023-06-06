import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/Imagery/Property%20Photography/Conrad/N/NYCCNCI/Penthouse_Lounge.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>NEW YORK</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.hilton.com/im/en/CUNCICI/17040369/conrad-tulum-041104.jpg?impolicy=crop&cw=4500&ch=2475&gravity=NorthWest&xposition=0&yposition=262&rw=2048&rh=1126"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>TULUM</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_540,h_485,q_80,f_auto,g_auto/Imagery/Property%20Photography/Conrad/L/LAXAVCI/Conrad_Pool_052A1152_R3.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>LOS ANGELES </h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;