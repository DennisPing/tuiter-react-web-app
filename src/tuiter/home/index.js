import cardArray from "./cards.json";
import HomeCard from "./home-card";

const HomeComponent = () => {
  return (
    <div className="list-group rounded-4">
      {cardArray.map((card) => (
        <HomeCard key={card.id} card={card} />
      ))}
    </div>
  );
};
export default HomeComponent;
