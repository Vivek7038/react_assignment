import "../styles/UserCard.css";
const UserCard = ({ imageSrc, altText, name }) => {
  return (
    <div className="card">
      <img className="avatar" src={imageSrc} alt={altText} />
      <span className="name">{name}</span>
    </div>
  );
};

export default UserCard;
