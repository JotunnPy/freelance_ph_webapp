import { auth, db } from "@/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [currentlyLoggedIn, setCurrentlyLoggedIn] = useState<any>(null);
  const [errMessage, setErrMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [userData, setUserData] = useState<DocumentData | null | undefined>(
    null
  );
  const [editBio, setEditBio] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentlyLoggedIn(user);
        getDoc(doc(db, "users/" + user.uid)).then((res) => {
          setUserData(res.data());
        });
        onSnapshot(doc(db, "users/" + user.uid), (res) => {
          setUserData(res.data());
        });
      } else {
        setCurrentlyLoggedIn(null);
        setUserData(null);
      }
    });
  }, []);
  async function _register() {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setDoc(doc(db, "users/" + res.user.uid), {
        userName: userName,
        email: email,
      });
    });
  }
  function _login() {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setErrMessage(err.code);
    });
  }

  function _logout() {
    signOut(auth);
  }

  const translation = {
    "auth/invalid-email": "Invalid Email",
    "auth/user-not-found": "User does not exist",
    "auth/wrong-password": "Incorrect Password",
  };

  return (
    <div className="flex justify-center p-10 gap-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (login) {
            _login();
          } else {
            _register();
          }
        }}
      >
        <div className="flex-col gap-3">
          {/**@ts-ignore */}
          <text className="text-red-500">{translation[errMessage]}</text>
          <br />
          {!login && (
            <input
              key={"Username"}
              className=" text-black mt-2"
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.currentTarget.value);
              }}
            />
          )}
          <br />

          <input
            className=" text-black mt-2"
            key={"Email"}
            placeholder={"Email" + (login ? "/Username" : "")}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
            }}
          />
          <br />
          <input
            key={"Pass"}
            className="text-black my-2"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
          />
          <br />
          <button type="submit">{login ? "Login" : "Register"}</button>
        </div>

        <br />
        <a
          className="hover:cursor-pointer"
          onClick={() => {
            setLogin(!login);
          }}
        >
          Switch to {login ? "Register" : "Login"}
        </a>
      </form>

      <div className="flex flex-col">
        <button
          onClick={() => {
            _logout();
          }}
        >
          Log out
        </button>
        <br />
        <button
          onClick={() => {
            signInWithPopup(auth, new GoogleAuthProvider()).catch();
          }}
        >
          Signin with google
        </button>
        <br />
      </div>
      <div className="flex flex-col">
        <text>Currently Logged In: {currentlyLoggedIn?.email}</text>
        <text>Username: {userData?.userName}</text>
        <text onClick={() => {}}>
          Bio:{userData?.bio}
          <br />
          {!editBio && (
            <button
              onClick={() => {
                setEditBio(true);
              }}
            >
              Edit Bio
            </button>
          )}
          {editBio && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateDoc(doc(db, "users/" + currentlyLoggedIn?.uid), {
                  bio: bio,
                });
                setEditBio(false);
              }}
            >
              <input
                className="text-black"
                onChange={(e) => {
                  setBio(e.currentTarget.value);
                }}
              />
              <button type="submit">Save</button>
            </form>
          )}
        </text>
      </div>
    </div>
  );
}

export default Index;
