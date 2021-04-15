const ErrorCityComponent = ({ color, fontSize }) => {
  return (
    <>
      <div className='column'>
        <p style={{ fontSize: fontSize }}>Oh no, something went wrong in the city list</p>
        <p style={{ color: color }}>ERROR</p>
      </div>
    </>
  );
};

export default ErrorCityComponent;
