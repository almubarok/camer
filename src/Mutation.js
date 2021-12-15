import { gql, useMutation, useQuery, useLazyQuery } from '@apollo/client';
import {useState, useEffect} from 'react'

const QUERY_GET_USELAZYQUERY = gql`
    query MyQuery($id: Int!) {
        siswa_by_pk(id: $id) {
            id
            nama
            nilai
        }
    }
`;

const QUERY_GET_DATA = gql`
    query MyQuery {
        siswa {
        id
        nama
        nilai
        }
    }
`;

const QUERY_MUTATION = gql`
  mutation MyMutation($_set: siswa_set_input, $pk_columns: siswa_pk_columns_input!) {
    update_siswa_by_pk(_set: $_set, pk_columns:$pk_columns) { 
      nama
      nilai
    }
  }
`;

export default function AddTodo() {
    let input;
    const [addTodo, { data, loading, error }] = useMutation(QUERY_MUTATION);

    const { loading:loading_get, error:error_get, data:data_get } = useQuery(QUERY_GET_DATA);

    const [getSiswa, { loading:loading_lazy_query, error:error_lazy_query, data:data_lazy_query }] = useLazyQuery(QUERY_GET_USELAZYQUERY,{onCompleted: (data) => handleGetSiswa(data) });

    const [id,setId] = useState("")
    const [nama,setNama] = useState("")
    const [nilai,setNilai] = useState("")

  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    
    if (loading_get) return <p>Loading...</p>;
    if (error_get) return <p>Error :(</p>;

    if (loading_lazy_query) return <p>Loading...</p>;
    if (error_lazy_query) return <p>Error :(</p>;


    const handlerEdit = (e)=>{
        const {id} = e.target
 
        // const siswa = data_get.siswa.find((x)=>x.id===parseInt(id))

        // setId(siswa.id)
        // setNama(siswa.nama)
        // setNilai(siswa.nilai)
        getSiswa({variables: { id:parseInt(id) }})
    }

    const handleGetSiswa = (data) =>{
        setId(data.siswa_by_pk.id)
        setNama(data.siswa_by_pk.nama)
        setNilai(data.siswa_by_pk.nilai)
    }
  
    return (
      <div>
        {data_get.siswa.map((siswa)=>{
            return (<div>
                        <div>ID : {siswa.id}</div>
                        <div>Nama :{siswa.nama}</div>
                        <div>Nilai :{siswa.nilai}</div>
                        <button id={siswa.id} onClick={(e)=>handlerEdit(e)}>Edit</button>
                        <hr/>
                </div>)
        })
        }

        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo(
                    { variables: { 
                            _set: {nama,nilai},
                            pk_columns:{id}
                         }
                    }
                );
          }}
        >
        ID : <input type="text" onChange={(e)=>setId(e.target.value)} value={id}/> <br/>
        Nama : <input type="text" onChange={(e)=>setNama(e.target.value)} value={nama}/> <br/>
        Nilai : <input type="text" onChange={(e)=>setNilai(e.target.value)} value={nilai}/> <br/>
          <button type="submit">Update Data</button>
        </form>
      </div>
    );
  }