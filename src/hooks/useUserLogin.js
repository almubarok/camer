import { useLazyQuery } from "@apollo/client";
import { QueryLogin } from "../graphql/query";

export default function useUserLogin() {
  const [doLogin, { data, loading: loadingGet, errorGet }] =
    useLazyQuery(QueryLogin);

  return {
    doLogin,
    user: data?.user,
    loadingGet,
    errorGet,
  };
}
