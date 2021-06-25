import classes from "./ProfilePage.module.css";
import ProfilePicComponent from "../ProfilePicComponent";
const ProfilePage = ({ user }) => {
  return (
    <>
      {user ? (
        <div>
          <div className={classes.profilePictureFrame}>
            <ProfilePicComponent profilePic={user.profilePic} />
          </div>

          <div className={classes.profileInfo}>
            <p>Username: {user.username}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default ProfilePage;
