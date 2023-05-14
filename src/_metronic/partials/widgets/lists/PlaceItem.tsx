interface PlaceProps {
    place: {
      dag_id: string;
      active: string;
    };
  }

  const PlaceItem = ({ place }: PlaceProps) => {
    return (
      <div>
          <p>{place.dag_id}</p>
          <p>{place.active}</p>
      </div>
    );
  };
  
  export default PlaceItem;