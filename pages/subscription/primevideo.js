import React from 'react';
import { ContainerBlock } from '../../components';
import {Doughnut, Bar} from 'react-chartjs-2';
import Link from 'next/link';
import { withProtected } from "../../src/hook/route";

const data = {
    title: "Amazon Prime",
    data: "You are Not Subscribed to Amazon Prime. Get Subscription for prices as low as $1/month",
    doughnutData: {  
        labels: [
            'Used',
            'Idle',
            'Not Used'
        ],
        datasets: [{
            data: [0, 1, 100],
            backgroundColor: [
                '#2f34de',
                '#FF6384',
                '#FFCE56'
            ],
        hoverBackgroundColor: [
            '#171a78',
            '#36A2EB',
            '#FFCE56'
        ]
        }]
    },
}

function subscription() {
    
  return (
    <ContainerBlock>
        <div className='mx-16'>
            <h1 className='text-5xl text-center'>{data.title}</h1>
            <div className='flex justify-center space-x-16 pt-10 dark:text-gray-300 text-gray-600'>
                <div className='flex-column items-center '>
                   <div className='text-gray-50 border rounded-xl bg-blue-900 dark:text-gray-50 text-lg max-w-xl p-5'> 
                        {data.data}  
                        <Link href="https://youtu.be/dQw4w9WgXcQ"><button className=' ml-2 bg-pink-400 text-white p-2 rounded hover:bg-pink-600'> Get Offer</button></Link>
                    </div>
                   <div>
                            <div className='p-10 doughwidth mx-16'>
                                <Doughnut
                                data={data.doughnutData}
                                width={400}
                                height={400}
                                />
                                <div className='text-center text-lg dark:text-gray-300 text-gray-600 pt-16'> Usage Cycle</div>
                            </div>
                       </div>
                </div>
            </div>
         </div>            
    </ContainerBlock>
    );
}

export default withProtected(subscription);
