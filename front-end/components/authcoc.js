import { useRouter } from 'next/router'
import { useEffect } from 'react'

const authCoc = WrappedComponent => {
    const Wrapper = props => {
        const { token } = props
        const router = useRouter()
        useEffect(() => {
            if (!token)
                router.push('/usercoc')
        }, [token])
        return (<WrappedComponent {...props} />)
    }
    return Wrapper
}

export default authCoc

