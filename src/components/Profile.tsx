import './Profile.css'

type ProfileProps = {
  name?: string;
  age?: number;
  hobby?: string;
}

export default function Profile({ ...props }: ProfileProps) {
  return (
    <div className="profile-card">
      <div className="card-picture">
        <img height="100px" width="100px" src="https://thispersondoesnotexist.com/" alt="face" />
      </div>
      <div className="card-content">
        <p className="title">{props.name}</p>
        <div className="description">
          <table className="table-desc">
            <tbody>
              <tr>
                <td>Age</td>
                <td>:</td>
                <td>{props.age}</td>
              </tr>
              <tr>
                <td>Hobby</td>
                <td>:</td>
                <td>{props.hobby}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}