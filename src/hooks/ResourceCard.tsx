import { ResourceType } from "../type";
import useResource from "./useResource";

interface Props {
  type: ResourceType;
}

function ResourceCard({ type }: Props) {
  const { data, loading } = useResource(type);

  return (
    <div className="resourceBox">
      <h2>{type}</h2>
      <div className="resourceDataContainer">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="resourceDataContent">
            <div className="resourceDataField">
              <div
                className={data?.success ? "status_success" : "status_error"}
              >
                {data?.success ? "Healty" : "Error"}
              </div>
            </div>
            <div className="resourceDataField">
              <div className={data?.success ? "" : "hostname_error"}>
                <span>{data?.hostname}</span>
              </div>
            </div>
            <div className="resourceDataField">
              <div className={data?.success ? "" : "time_error"}>
                <span>
                  {data?.success ? (
                    new Date(data?.time).toLocaleTimeString()
                  ) : (
                    <div>
                      <p>403</p>
                      <p>Forbidden</p>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceCard;
