import React,{useState} from 'react'
import SideMenu from '../SideMenu'
import { Table, } from 'antd';
import "./Payment.css"
import { Select } from 'antd';


const { Option } = Select;

const Payment = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    
    const handleChange = (name, value) => {
        setSelectedOption(value);
       
    };

    const dataSource = [
        {
            key: '1',
            sNo: 1,
            group: 500,
            name: "Adams",
            currentDue: 1000,
            amount: 15000,
        },
        {
            key: '2',
            sNo: 2,
            group: 1000,
            name: "Raj",
            currentDue: 1000,
            amount: 15000,
        },
        {
            key: '3',
            sNo: 3,
            group: 1000,
            name: "Bala",
            currentDue: 1000,
            amount: 15000,
        },
    ];

    const columns = [
        {
            title: 'S No',
            dataIndex: 'sNo',
            key: 'sNo',
        },
        {
            title: 'Group',
            dataIndex: 'group',
            key: 'group',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Current Due',
            dataIndex: 'currentDue',
            key: 'currentDue',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];


    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenu />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">
                <div className='closedDue-container'>
                    <div className='closedDue-title-outer'>
                        <h2 className="closed-due-title">Payment</h2>
                    </div>

                    <div className='select-option-outer' >
                        <p style={{ paddingRight: "20px" }}>Select Branch and Chit to Pay</p>
                        <Select
                            defaultValue={selectedOption}
                            style={{ width: 200 }}
                            onChange={(value) => handleChange('branch', value)}
                            className='closedDue-Select'
                        >
                            <Option value="madurai">madurai</Option>
                            <Option value="thirupur">thirupur</Option>
                            <Option value="dindugal">dindugal</Option>
                        </Select>
                    </div>

                    <div style={{ paddingTop: "20px" }}>
                        <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 500 }} />
                    </div>
                    <div className='closedDue-pay-outer'>
                        <button size='large' className='closedDue-pay'>PAY</button>
                    </div>
                </div>
            </div>

        </div>
        )
}

export default Payment