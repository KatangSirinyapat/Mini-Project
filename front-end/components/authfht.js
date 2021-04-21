import { useRouter } from 'next/router'
import { useEffect } from 'react'

const authFht = WrappedComponent => {
    const Wrapper = props => {
        const { token } = props
        const router = useRouter()
        useEffect(() => {
            if (!token)
                router.push('/userfht')
        }, [token])
        return (<WrappedComponent {...props} />)
    }
    return Wrapper
}

export default authFht

