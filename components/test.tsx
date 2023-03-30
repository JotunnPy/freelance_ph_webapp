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
import Login from "./login";
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
    <div className="mx-auto w-fit relative">
      <div className="">
        <div>
          {user ? (
            <div className="flex flex-col bg-white px-10 py-4 rounded-xl">
              <div>
                <div
                  className="
                     text-gray-900
                     group flex flex-col w-full items-center rounded-md px-2 py-2 text-sm gap-2"
                >
                  <div className="flex items-center">
                    <div className="bg-black h-20 rounded-full w-20 grow"></div>
                    <div className="flex flex-col p-2 grow  w-44">
                      <div className="flex flex-col ">
                        <text className="text-center font-extrabold text-xl">
                          John Doe
                        </text>
                        <text className="text-gray-400 text-sm text-center">
                          @{userData?.userName}
                        </text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow">
                  <div className="flex items-center">
                    <div className="flex flex-col flex-1">
                      <text className="font-light">Bio:</text>

                      <div
                        className="px-3 text-justify flex flex-col"
                        onClick={() => {}}
                      >
                        {!editBio && (
                          <div className="flex flex-col">
                            <text className=" max-h-24 w-60 overflow-hidden font-bold">
                              {userData?.bio}
                            </text>
                            <br />
                            <button
                              className=" bg-black px-4 py-1 transition-all hover:bg-gray-200 hover:text-black text-white rounded-lg"
                              onClick={() => {
                                setEditBio(true);
                              }}
                            >
                              Edit Bio
                            </button>
                          </div>
                        )}
                        {editBio && (
                          <form
                            className="flex flex-col gap-2 items-center"
                            onSubmit={(e) => {
                              e.preventDefault();
                              updateDoc(
                                doc(db, "users/" + currentlyLoggedIn?.uid),
                                {
                                  bio: bio,
                                }
                              );
                              setEditBio(false);
                            }}
                          >
                            <textarea
                              placeholder="Write your introduction..."
                              className="bg-gray-200 rounded-md h-44 w-full p-2"
                              onChange={(e) => {
                                setBio(e.currentTarget.value);
                              }}
                            ></textarea>
                            <div className="flex gap-4 w-full">
                              <button className="flex-1 bg-red-400 text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition-all">
                                Cancel
                              </button>
                              <button
                                className=" bg-black flex-1 text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition-all"
                                type="submit"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <br />
              </div>
              <div className="bg-gray-100 h-1 rounded-lg my-1"></div>
              <Link
                className="text-cyan-600 hover:bg-black p-2 rounded-lg hover:text-cyan-400 text-center"
                href="/"
              >
                View Full Profile
              </Link>
              <div className="bg-gray-100 h-1 rounded-lg my-1"></div>
              <button
                className="text-red-600 hover:bg-black p-2 rounded-lg hover:text-red-400"
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
