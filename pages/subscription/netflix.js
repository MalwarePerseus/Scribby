import React from 'react';
import { ContainerBlock } from '../../components';
import {Doughnut, Bar} from 'react-chartjs-2';
import { withProtected } from "../../src/hook/route";

const data = {
    title: "Netflix",
    data: "You Subscribed to Netflix on 1st January 2022, Next payment is on 2 March 2022. Your Usage stats are given below. You will receive an email if you don't use this service for more than 15 days.",
    doughnutData: {  
        labels: [
            'Used',
            'Idle',
            'Not Used'
        ],
        datasets: [{
            data: [32, 9, 10],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
        }]
    },
    barData: {
        labels: ['Horror', 'Fantasy', 'Crime', 'Sc-Fi', 'Romance', 'Thriller'],
        datasets: [{
            label: 'No of Series/Movies',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    } 
}

function subscription() {
    
  return (
    <ContainerBlock>
        <div className='mx-16'>
            <h1 className='text-5xl text-center'>{data.title}</h1>
            <div className='flex flex-row space-x-16 pt-10 dark:text-gray-300 text-gray-600'>
                <div className='flex-column py-8'>
                   <div className='text-gray-50 border rounded-xl bg-red-300 dark:text-gray-50 text-lg max-w-xl p-5'> 
                        {data.data} 
                    </div>
                   <div>
                            <div className='p-10  doughwidth mx-16'>
                                <Doughnut
                                data={data.doughnutData}
                                width={400}
                                height={400}
                                />
                                <div className='text-center text-lg dark:text-gray-300 text-gray-600 pt-16'> Usage Cycle</div>
                            </div>
                    </div>
                   </div> 
                   <div className='barwidth'>               
                        
                        <div className='text-center text-lg dark:text-gray-300 text-gray-600 py-10'> Most Watched Genres</div>
                        <Bar
                            data={data.barData}
                            width={400}
                            height={200}
                            options={{
                                maintainAspectRatio: false
                            }}
                        /> 
                    </div>  
                </div>
            </div>            
    </ContainerBlock>
    );
}

export default withProtected(subscription);
