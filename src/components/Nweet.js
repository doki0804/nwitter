import React, { useState } from "react";
import {
  doc,
  updateDoc,
  deleteDoc,
  dbService,
  deleteObject,
  storageService,
  ref,
} from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await deleteDoc(NweetTextRef);
      await deleteObject(ref(storageService, nweetObj.attachmentUrl));
    }
  };
  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setNewNweet(nweetObj.text);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    const ok = window.confirm("Are you sure you want to edit this nweet?");
    if (ok) {
      await updateDoc(NweetTextRef, { text: newNweet });
    }
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              type="text"
              placeholder="Edit your Nweet"
              value={newNweet}
              required
            />
            <input type="submit" value="Update Nweet" />
          </form>

          <button onClick={toggleEditing}>Cancle</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img src={nweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default Nweet;
