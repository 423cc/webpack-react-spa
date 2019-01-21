import React from 'react';
import 'ant-design-pro/dist/ant-design-pro.css';
import {Bar} from 'ant-design-pro/lib/Charts';

export default class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    render() {
        const salesData = [];
        for (let i = 0; i < 12; i += 1) {
            salesData.push({
                x: `${i + 1}月`,
                y: Math.floor(Math.random() * 1000) + 200,
            });
        }

        return (<Bar
            height={200}
            title="销售额趋势"
            data={salesData}
        />)
    }

}


