import { useEffect, useRef, useState } from "react";
import { ReqResListado, User } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const pageRef = useRef(1);

    useEffect(() => {
        //llamado API
        loadUsers();
    }, [])

    const loadUsers = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: pageRef.current
            }
        })

        if( resp.data.data.length > 0){
            setUsers( resp.data.data );   
        }else{
            pageRef.current--;
            alert("No hay mas registros");
        }
        
        
    }

    const nextPage = () => {
        pageRef.current++;
        loadUsers()

    }

    const prevPage = () => {
        if( pageRef.current > 1){
            pageRef.current--;
            loadUsers()
        }
        
    }
    
    return {
        users,
        nextPage,
        prevPage,
    }
}
