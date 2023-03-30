import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
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
import Login from "../pages/test/login";
import { auth, db } from "@/firebase/firebase";

const NavbarComp = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [currentlyLoggedIn, setCurrentlyLoggedIn] = useState<any>(null);
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

  return (
    <div className="mx-auto p-6 w-fit relative">
      <div className="">
        <div>
          {user ? (
            <div className="flex flex-col">
              <div>
                <text>Username: @{userData?.userName}</text>
                <text> is logged in.</text>
                <br />
                <text onClick={() => {}}>
                  Bio: {userData?.bio}
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
              <button
                className=" bg-red-100"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <div>
                <Login></Login>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
