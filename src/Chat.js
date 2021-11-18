import {useSubscription, gql, useMutation} from "@apollo/client";
import {useState} from 'react'

const CHAT_SUBSCRIPTION = gql`
    subscription MySubscription {
        chat {
            id
            sender
            text
            created_at
        }
    }
`;

const CHAT_MUTATION = gql`
    mutation MyMutation($object:chat_insert_input!) {
        insert_chat_one(object: $object) {
            id
        }
    }
`

export default function Chat(){
    const [sendMessage, { data, loading, error }] = useMutation(CHAT_MUTATION);
    const {data:data_subscription, loading:loading_subscription } = useSubscription(CHAT_SUBSCRIPTION);
    const [nama,setNama]=useState("")
    const [pesan,setPesan]=useState("")

    const kirimPesan = ()=>{
        sendMessage({variables:{object:{sender:nama,text:pesan}}})
    }

    return (<div>
        {!loading_subscription && data_subscription.chat.map((chat)=>{
            return(
                <div>
                    <div>{chat.id}</div>
                    <div>{chat.sender}</div>
                    <div>{chat.created_at}</div>
                    <div>{chat.text}</div>
                </div>
            )
        })}
        <hr/>
        <br/>
        <div>
            Nama : <input type="text" value={nama} onChange={(e)=>setNama(e.target.value)}/><br/>
            Pesan : <textarea value={pesan} onChange={(e)=>setPesan(e.target.value)}></textarea><br/>
            <button onClick={kirimPesan}>Kirim</button>
        </div>
    </div>)
}