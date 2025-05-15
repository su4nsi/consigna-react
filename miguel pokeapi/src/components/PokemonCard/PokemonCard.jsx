import "./PokemonCard.css";

export function PokemonCard({ id, name, imageUrl }) {
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} className="pokemon-image" />
      <h1>#{id}</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default PokemonCard;
