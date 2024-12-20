export const Profile = () => {
    return (
      <div className="container mt-4">
        <h2>Your Profile</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" defaultValue="David M" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" defaultValue="john@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" defaultValue="123-456-7890" />
          </div>
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      </div>
    );
  };
  