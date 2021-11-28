import { QueryGetUsers } from "../graphql/query";
import { useQuery } from "@apollo/client";

export default function useGetUsers() {
  const { data } = useQuery(QueryGetUsers);

  return {
    users: data?.user,
  };
}
