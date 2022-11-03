import { NextPage } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';
import Layout from '../components/layout';
import { authOptions } from './api/auth/[...nextauth]';

const Dashboard: NextPage<{ session: Session }> = ({ session }) => {
    return (
        <Layout>
            <div>Dashboard</div>
        </Layout>
    )
}

export default Dashboard;

export async function getServerSideProps({ req, res }) {
    return {
        props: {
            session: await unstable_getServerSession(req, res, authOptions)
        }
    }
}