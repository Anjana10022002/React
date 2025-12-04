function Profilecard() {
  return (
    <div className="profile-card">
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGNhcmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-bio">
        A passionate developer with a love for creating intuitive user experiences.
      </p>
      <button className="follow-button">Follow</button>
    </div>
  );
}
export default Profilecard;