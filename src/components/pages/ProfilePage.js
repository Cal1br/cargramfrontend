import classes from "./ProfilePage.module.css";
import ProfilePicComponent from "../ProfilePicComponent";
import Biography from "../Biography";
const ProfilePage = ({ user }) => {
  var t = "2010-06-09 13:12:01".split(/[- :]/);

  // Apply each element to the Date function
  var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));

  console.log(d);
  return (
    <>
      {user ? (
        <div>
          <div className={classes.profileInfo}>
            <div className={classes.profilePictureFrame}>
              <ProfilePicComponent profilePic={user.profilePic} />
            </div>
            <p>
              Username: {user.username}
              <br />
              Is Online?: {user.isOnline ? "Online" : "Offline"}
              <br />
              Last Online: {user.lastOnline}
              <br />
              Account creation: {user.accountCreation}
            </p>
            <Biography user={user}></Biography>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProfilePage;
