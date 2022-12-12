import React from 'react';
import CompBooking from '../../MainComponent/Computer/CompBooking';
import { DashboardContainer } from '../DashboardStyle';
import Sidebar from '../Sidebar';

const ComputerBoooking = () => {
    return (
        <div>
            <DashboardContainer >
                <Sidebar />
                <CompBooking />
            </DashboardContainer>
        </div>
    );
};

export default ComputerBoooking;