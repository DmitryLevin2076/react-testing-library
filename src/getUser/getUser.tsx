import { useEffect, useState } from "react";

const getUser = async (id: string): Promise<string> =>
    id[0].toUpperCase().concat(id.slice(1))

const useUserQuery = (id: string | null) => {
    const [data, setData] = useState<string | null>(null)
    useEffect(() => {
        if (!id) {
            setData(null)
            return
        }
        getUser(id).then(setData)
    }, [id])
    return data
}

const UserView = ({ id }: { id: string | null }) => {
    const data = useUserQuery(id)
    if (data === null) return <div>Loading...</div>
    return <>{data}</>
}

export default UserView
