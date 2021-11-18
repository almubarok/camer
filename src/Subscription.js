import {useSubscription, gql} from "@apollo/client";

const COMMENTS_SUBSCRIPTION = gql`
    subscription MySubscription {
        kelas {
            guru
            id
            nama
        }
    }
`;

export default function LatestComment() {
  const { data, loading } = useSubscription(
    COMMENTS_SUBSCRIPTION,
    // { variables: { postID } }
  );
  return (<div>
      <h2>Use Subscription</h2>
      {!loading && data.kelas.map((kelas)=>{
          return <div>
          <h4>Kelas Baru</h4>
          <div>Nama : {!loading && kelas.nama}</div>
          <div>Guru : {!loading && kelas.guru}</div>
          <hr/>
      </div>
      })}
  </div>)
}