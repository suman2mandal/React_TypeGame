import {useEffect,useState,createContext} from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';
//space typist
function Message() {
    const [index,setIndex] = useState(0);
    const [message,setMessage] = useState('');
    const [author,setAuthor] = useState('');

    const [typable,setTypable] = useState([]);
    const [typedData,setTypedData] = useState("");
    let max_index=0;
    const [incorrect,setIncorrect] = useState([]);
    const [incorrenctHistory, setIncorrectHistory] = useState([]);

    useEffect(()=>{
        const getstr =async ()=> {
            let temp_message = await axios.get("https://api.quotable.io/random");
            setMessage(temp_message.data.content);
            setAuthor(temp_message.data.author);
        }

        getstr();
    },[])

    useEffect(()=>{
        let tempData = message.split('').map((data,index)=>{
            return (<span key={index} className="initial">{data}</span>);
        })
        setTypable(tempData);
    },[message])

    useEffect(()=>{
        setIndex(typedData.length-1);
        if (message.length-1 === index) {
            if (checkAcurary()) {
                console.log("inside");
                navigate('/Result');
            }
        }
    },[typedData])

    const update_rest=()=>{
        const new_list = typable.map((data,pos)=>{
            let temp={}
            if(pos > index){
                temp=<span key={data.key} className="initial">{data.props.children}</span>
            }else{
                temp=data
            }
            return temp;
        })
        return new_list;
    }


    useEffect(()=>{
        max_index = (max_index<index)?index:max_index;
        const updater=()=> {
            const new_list = typable.map((data,pos)=>{
                let temp={}
                if(data.key===index.toString()){
                    if(data.props.children===typedData[index]) {
                        temp = <span key={data.key} className="correct">{data.props.children}</span>
                        // Need to check if currect index in present in incorrect state then remove it from there
                        for(let i=0;i<incorrect.length;i++){
                            if(pos===incorrect[i]){
                                setIncorrectHistory([...incorrenctHistory,incorrect[i]]);
                                incorrect[i]=-1;
                            }
                        }
                    }else{
                        temp = <span key={data.key} className="incorrect">{data.props.children}</span>
                        setIncorrect([...incorrect, pos])
                        console.log("current incorrect",incorrect);
                    }
                }else{
                    if(pos<index) {
                        temp = data;
                    }else {
                        temp = <span key={data.key} className="initial">{data.props.children}</span>
                    }
                }

                return temp;
            })
            return new_list;
        }
        setTypable(updater);
    },[index])

    const checkAcurary = ()=>{
        let flag = false;
        for(let i =0;i<incorrect.length;i++){
            console.log("checking");
            if(incorrect[i]===-1){
                flag=true;
                console.log("found no error");
            }else{
                flag=false;
                console.log("found a error");
                break;
            }

        }
        return flag;
    }
    const navigate = useNavigate();
    return (
        <div style={{marginTop:"10%"}}>
            {typable}
            <div className={"WriterName container"}><q>{author}</q></div>
            <div className={"d-flex justify-content-center"}>
                <input type="text" value={typedData} className={"TypingAria col-8 m-4"} onChange={(e)=>{setTypedData(e.target.value)}}/>
            </div>
        </div>);
}

export default Message