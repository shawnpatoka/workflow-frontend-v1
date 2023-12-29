import UserAvatar from "./UserAvatar"

function UserCardH({ fullName, emailAddress }) {
  return (
    <div className="usercard-h">
      <UserAvatar name={fullName} />
      <div className="ms-2">
        <h5 className="offcanvas-title" id="sideNavBarLabel">{fullName}</h5>
        <p>{emailAddress}</p>
      </div>
    </div>
  )
}
export default UserCardH