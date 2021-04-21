import { useRouter } from 'next/router'
import { useEffect } from 'react'

const authFis = WrappedComponent => {
    const Wrapper = props => {
        const { token } = props
        const router = useRouter()
        useEffect(() => {
            if (!token)
                router.push('/userfis')
        }, [token])
        return (<WrappedComponent {...props} />)
    }
    return Wrapper
}

export default authFis
