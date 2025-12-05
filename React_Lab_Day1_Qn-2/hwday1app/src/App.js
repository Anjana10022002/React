function ProfileCard({
  imageUrl = 'https://static.vecteezy.com/system/resources/previews/056/509/006/non_2x/generic-woman-profile-silhouette-icon-for-avatar-and-identity-vector.jpg',
  name = 'Alice Johnson',
  description = 'A passionate developer and tech enthusiast.',
}) {
  const styles = {
    image: {
      width: "150px",
      height: "150px",
      border: "2px solid #000",
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
      margin: "0 auto",
    },
    card: {
      width: "280px",
      backgroundColor: "#f5f5f5",
      border: "2px solid #ccc",
      borderRadius: "12px",
      padding: "20px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div style={styles.card}>
      <img src={imageUrl} style={styles.image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
