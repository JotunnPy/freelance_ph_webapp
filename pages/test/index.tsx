import type { NextPage } from "next";
import Login from "./login";
import Test from "../../components/test";

const Home: NextPage = () => {
  return (
    <div className="my-32 p-2">
      <h1>THIS IS DEFAULT HOME PAGE CONTENT</h1>
      <Test></Test>
    </div>
  );
};

export default Home;
