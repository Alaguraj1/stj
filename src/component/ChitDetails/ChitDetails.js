import React,{useState} from 'react'
import { Table, Button, Checkbox } from 'antd';
import { Select } from 'antd';
import "./ChitDetails.css"
import SideMenuTwo from '../SideMenuTwo';

const { Option } = Select;


const ChitDetails = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectData, setSelectData] = useState({
        branch: null,
        chitName: null,
        amount: null,
        referenceUser: null,
    });

    const handleChange = (name, value) => {
        setSelectedOption(value);
        setSelectData({ ...selectData, [name]: value });
    };

    const handleSubmit = () => {
        console.log('Selected Data:', selectData);
    };

    const dataSource = [
        {
            key: '1',
            chitGroup: 'SLABU',
            noOfDues: 12,
            groupCapacity: 300,
            bonusAmount: 500,
            giftAmount: 0,
        },
    ];

    const columns = [
        {
            title: 'Chit Group',
            dataIndex: 'chitGroup',
            key: 'chitGroup',
        },
        {
            title: 'No Of Dues',
            dataIndex: 'noOfDues',
            key: 'noOfDues',
        },
        {
            title: 'Group Capacity',
            dataIndex: 'groupCapacity',
            key: 'groupCapacity',
        },
        {
            title: 'Bonus Amount',
            dataIndex: 'bonusAmount',
            key: 'bonusAmount',
        },
        {
            title: 'Gift Amount',
            dataIndex: 'giftAmount',
            key: 'giftAmount',
        },
    ];

    return (
        <div className="elisc_tm_all_wrap" data-magic-cursor="show" data-enter="fadeInLeft" data-exit="true">
            <SideMenuTwo />
            <div className="elisc_tm_mainpart w-full min-h-[100vh] clear-both float-left pl-[370px]">

                <div className="details w-full min-h-[100vh] flex items-center container">
                    <div className="left w-1/2">
                        <h3 className="chit-details-title">Hi Adams, <br /> Welcome To Thangam Jewellery</h3>
                        <h6 className="chit-details-subTitle" >Chit Details</h6>
                        <div className='select-option-outer' >
                            <p style={{ paddingRight: "20px" }}>Select Branch</p>
                            <Select
                                defaultValue={selectedOption}
                                style={{ width: 200 }}
                                onChange={(value) => handleChange('branch', value)}
                            >
                                <Option value="madurai">madurai</Option>
                                <Option value="thirupur">thirupur</Option>
                                <Option value="dindugal">dindugal</Option>
                            </Select>
                        </div>

                        <div className='select-option-outer'>
                            <p style={{ paddingRight: "43px" }}>Chit Name</p>
                            <Select
                                defaultValue={selectedOption}
                                style={{ width: 200 }}
                                onChange={(value) => handleChange('chitName', value)}
                            >
                                <Option value="Gold Virksham">Gold Virksham</Option>
                                <Option value="Swarna Laksita">Swarna Laksita</Option>
                                <Option value="Gold Virksham Plus">Gold Virksham Plus</Option>
                            </Select>
                        </div>

                        <div  className='select-option-outer'>
                            <p style={{ paddingRight: "60px" }}>Amount</p>
                            <Select
                                defaultValue={selectedOption}
                                style={{ width: 200 }}
                                onChange={(value) => handleChange('amount', value)}
                            >
                                <Option value="5000">5000</Option>
                                <Option value="10000">10000</Option>
                                <Option value="15000">15000</Option>
                            </Select>
                        </div>

                        <p style={{ fontSize: "14px" }}>*NOTE you can purchase from the selected branch</p>
                        <div style={{ marginTop: "20px" }}>
                            <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{ x: 500 }} className="responsive-table" />
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <h6 style={{ paddingBottom: "10px" }}>Reference User<span style={{ fontSize: "16px", paddingLeft: "5px", }}>(optional)</span></h6>
                            <Select
                                defaultValue={selectedOption}
                                style={{ width: 200 }}
                                onChange={(value) => handleChange('referenceUser', value)}
                            >
                                <Option value="Person 1">Person 1</Option>
                                <Option value="Person 2">Person 2</Option>
                                <Option value="Person 3">Person 3</Option>
                            </Select>
                        </div>
                        <Checkbox style={{ paddingTop: "25px" }}>Terms and conditions</Checkbox>
                        <div>
                            <Button type="primary" size="large" style={{ backgroundColor: "#9a2526", marginTop: "10px" }} onClick={handleSubmit}>Add Chit</Button>
                        </div>
                    </div>
                    <div className="right w-1/2 pl-[50px] login-image-cover">
                        <img src="assets/img/newChit.png" alt="image" className="new-chit-image" />
                    </div>
                </div>

            </div>
            </div>
            )
}

            export default ChitDetails