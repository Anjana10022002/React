function Profilecard() {
  let imageUrl = 'https://static.vecteezy.com/system/resources/previews/056/509/006/non_2x/generic-woman-profile-silhouette-icon-for-avatar-and-identity-vector.jpg';
  let name = 'Alice Johnson';
  let description = 'A passionate developer and tech enthusiast.';
  return (
    <div className="profile-card">
      <img src={imageUrl} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}
export default Profilecard;