import { useState, useRef } from "react";
import classes from "./Biography.module.css";
import axios from "axios";
const Biography = ({ user }) => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const textInputRef = useRef();
  function handleClick() {
    if (isReadOnly) {
      setIsReadOnly(false);
    } else {
      setIsReadOnly(true);
      axios.post("/user/uploadbiography", textInputRef.current.value).then(
        (obj) => {
          console.log(obj);
        },
        (err) => {
          console.log(err.response?.data?.message || "Network error");
        }
      );
    }
  }

  return (
    <>
      {user ? (
        <div>
          <textarea
            className={classes.textarea}
            maxLength="2000"
            readOnly={isReadOnly}
            id="biography "
            wrap="hard"
            ref={textInputRef}
            defaultValue={user.biography}
          ></textarea>
          <button className={classes.button} onClick={handleClick}>
            {isReadOnly ? "Edit" : "Save"}
          </button>
        </div>
      ) : (
        <div>
          <p>Can't find account</p>
        </div>
      )}
    </>
  );
};
export default Biography;
