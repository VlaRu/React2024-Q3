import { FetchDetailCard } from '../../api/FetchResponse';
import './Detail.css';

export function DetailCard({ data }) {
  FetchDetailCard({ idCard: data });
  return (
    <>
      <div
        key={data.id}
        className="container-detail"
      >
        <div className="container-detail-img_card">
          <img
            src={data.images.small}
            alt="pokemon-img"
            width={400}
          />
        </div>
      </div>
    </>
  );
}
