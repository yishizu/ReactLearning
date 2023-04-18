import{Box} from '@material-ui/core';
import{Header} from '../../components';

const Dashboard =() =>{
    return <Box m="20px">
        <Box display = "flex" justifyContent="space-between" alignItems="center">
            <Header title="Dashboard" subtitle="This is the dashboard page" />
        </Box>
    </Box>
}

export default Dashboard;