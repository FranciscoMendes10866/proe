import { useSelector } from 'react-redux'

const Dashboard = () => {
    const username = useSelector((state) => state.auth.username)
    return (
        <div>
            <h1>Dashboard</h1>
            <h3>🎉 { username } 🎉</h3>
        </div>
    )
}

export default Dashboard
