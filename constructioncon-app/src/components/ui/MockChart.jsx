import React from 'react';

export default function MockChart({ data, type = 'bar', color = 'blue' }) {
    const colors = {
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        yellow: 'bg-yellow-500',
        red: 'bg-red-500'
    };

    if (type === 'line') {
        return (
            <div className="w-full h-48 bg-gray-50 p-4 rounded-lg flex items-end">
                <svg viewBox="0 0 300 150" className="w-full h-full">
                    <polyline fill="none" stroke="#3b82f6" strokeWidth="2" points={data} />
                </svg>
            </div>
        );
    }

    return (
        <div className="w-full h-48 bg-gray-100 p-4 rounded-lg flex items-end space-x-2">
            {data.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center">
                    <div className={`${colors[color]} w-full rounded-t-md`} style={{ height: `${item.value}%` }}></div>
                    <span className="text-xs text-gray-500 mt-1">{item.name}</span>
                </div>
            ))}
        </div>
    );
}