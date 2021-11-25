import { MutationSignup } from "../graphql/mutation";
import { useMutation } from "@apollo/client";

export default function useUserSignup({ onError }) {
  const [doSignup, { data, loading, error }] = useMutation(MutationSignup, {
    onError,
  });

  return {
    doSignup,
    signupData: data?.insert_user_one,
    signupLoading: loading,
    signupError: error,
  };
}
