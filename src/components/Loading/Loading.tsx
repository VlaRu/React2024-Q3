import spinner from '../../assets/Spinner.svg';

export const Loading = () => {
  return (
    <>
      <div>
        <img
          src={spinner}
          alt="loading-img"
        />
      </div>
    </>
  );
};
