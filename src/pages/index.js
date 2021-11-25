import { parseCookies } from "nookies";

export default function Index() {
  const cookie = parseCookies();
  const isLoggedIn = cookie["userId"];

  return (
    <div>
      {isLoggedIn ? <p>Ini kalau sudah login</p> : <p>Ini belum login</p>}
    </div>
  );
}
