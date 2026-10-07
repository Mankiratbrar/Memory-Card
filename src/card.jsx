import './App.css'

export default function Card({ seed, onCardClick }) {
  return (
    <div className="card">
      <img
        src={`https://picsum.photos/seed/${seed}/200/300`}
        alt="Random"
        onClick={() => onCardClick(seed)}
      />
    </div>
  );
}