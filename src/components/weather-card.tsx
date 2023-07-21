type WeatherCardProps = {
  temperature: number;
  wind: number;
  elevation: number;
  position: {
    latitude: number;
    longitude: number;
  };
};

function WeatherCard(props: WeatherCardProps) {
  const {
    elevation,
    temperature,
    wind,
    position: {
      latitude = 10,
      longitude = 10,
    } = {},
  } = props;

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
          <div className="card" style={ { color: '#4B515D', borderRadius: '35px' } }>
            <div className="card-body p-4">
              <div className="d-flex flex-column text-center mt-5 mb-4">
                <h6
                  className="display-4 mb-0 font-weight-bold"
                  style={ { color: '#1C2331' } }
                >
                  {`${temperature}°C`}
                </h6>
                <span
                  className="small"
                  style={ { color: '#868B94' } }
                >
                  Latitude:
                  {' '}
                  {latitude}
                </span>
                <span
                  className="small"
                  style={ { color: '#868B94' } }
                >
                  Longitude
                  {' '}
                  {longitude}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={ { fontSize: '1rem' } }>
                  <div>
                    <i
                      className="fas fa-wind fa-fw"
                      style={ { color: '#868B94' } }
                    />
                    <span className="ms-1">
                      {`${wind} km/h`}
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-mountain-sun" />
                    <span className="ms-1">
                      {`${elevation}m`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
