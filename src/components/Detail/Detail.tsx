import { FetchDetailCard } from '../../api/FetchResponse';
import './Detail.css';
import { useNavigate } from 'react-router-dom';

interface DataDetail {
  id: string;
  images: {
    small?: string;
  };
}

interface Detail {
  data: DataDetail;
  activeDetail: boolean;
  setActiveDetail: (id: boolean) => void;
}

export function DetailCard({ data, activeDetail, setActiveDetail }: Detail) {
  const navigate = useNavigate();
  FetchDetailCard({ idCard: data });
  return (
    <>
      {activeDetail ? (
        <div
          key={data.id}
          className="container-detail"
        >
          <div className="container-detail-img_card">
            <button
              onClick={() => {
                navigate('/'), setActiveDetail(false);
              }}
            >
              Close
            </button>

            <img
              src={data.images.small}
              alt="pokemon-img"
              width={400}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
