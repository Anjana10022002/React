function ProfileCard({
  imageUrl = 'https://static.vecteezy.com/system/resources/previews/056/509/006/non_2x/generic-woman-profile-silhouette-icon-for-avatar-and-identity-vector.jpg',
  name = 'Alice Johnson',
  description = 'A passionate developer and tech enthusiast.',
}) {
  const styles = {
    image: {
      width: '150px',
      height: '150px',
      border: '2px solid #000',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    card: {
      width: '280px',
      backgroundColor: '#f5f5f5',
      border: '2px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      marginTop: '30px',
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
