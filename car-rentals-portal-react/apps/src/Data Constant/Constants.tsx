import React from 'react'
export const currencies: any = [
    { label: 'USD - United States Doller $', currancy: 'USD', symbol: '$' },
    { label: 'INR - Indian Rupee ₹', currancy: 'INR', symbol: '₹' },
    { label: 'AED - U.A.E. DirhAM د.إ', currancy: 'AED', symbol: 'د.إ' },
    { label: 'SGD - Singaporean Doller $', currancy: 'SGD', symbol: '$' },
    { label: 'EUR - Euro €', currancy: 'EUR', symbol: '€' },
    { label: 'PHP - Philippine Peso ₱', currancy: 'PHP', symbol: '₱' },
    { label: 'GBP - Pound Sterling £', currancy: 'GBP', symbol: '£' },
    { label: 'AUD - Australian Dollar ₳$', currancy: 'AUD', symbol: '₳$' },
    { label: 'SAR - Saudi Arabian Riyal ﷼', currancy: 'SAR', symbol: '﷼'},
    { label: 'QAR - Qatari Riyal ر.ق', currancy: 'QAR', symbol: 'ر.ق' },
    { label: 'CAD - Canadian Dollar C$', currancy: 'CAD', symbol: 'C$' },
    { label: 'CHF - Swiss Franc CHF', currancy: 'CHF', symbol: 'CHF' },
    { label: 'CNY - Chinese Yuan ¥', currancy: 'CNY', symbol: '¥' },
    { label: 'HKD - Hong Kong Dollar HK$', currancy: 'HKD', symbol: 'HK$' },
    { label: 'NZD - New Zealand Dollar NZ$', currancy: 'NZD', symbol: 'NZ$' },
    { label: 'MXN - Mexican Peso MXN$', currancy: 'MXN', symbol: 'MXN$' },
]


export const filtersData = 
{
    "filters": [
        {
            "name": "Price Group",
            "category": "PriceGroup",
            "type": "Range",
            "options": [
                {
                    "label": "Upto $100",
                    "count": 0,
                    "min": 0,
                    "max": 100
                },
                {
                    "label": "$100 to $200",
                    "count": 5,
                    "min": 100,
                    "max": 200
                },
                {
                    "label": "$200 to $300",
                    "count": 20,
                    "min": 200,
                    "max": 300
                },
                {
                    "label": "$300 & More",
                    "count": 19,
                    "min": 300,
                    "max": -1
                }
            ]
        },
        {
            "name": "Car Types",
            "category": "CarTypes",
            "type": "List",
            "options": [
                {
                    "label": "Economy",
                    "count": 3,
                    "value": "Economy",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Compact",
                    "count": 3,
                    "value": "Compact",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Intermediate",
                    "count": 3,
                    "value": "Intermediate",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Intermediate Pickup Truck",
                    "count": 1,
                    "value": "Intermediate Pickup Truck",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Mystery Car",
                    "count": 1,
                    "value": "Mystery Car",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Standard",
                    "count": 3,
                    "value": "Standard",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Full Size",
                    "count": 3,
                    "value": "Full Size",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Intermediate SUV",
                    "count": 1,
                    "value": "Intermediate SUV",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Full Size Pickup",
                    "count": 1,
                    "value": "Full Size Pickup",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Compact Crossover Electric",
                    "count": 1,
                    "value": "Compact Crossover Electric",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Standard Recreational Vehicle",
                    "count": 1,
                    "value": "Standard Recreational Vehicle",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Premium",
                    "count": 2,
                    "value": "Premium",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Convertible",
                    "count": 2,
                    "value": "Convertible",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Minivan",
                    "count": 2,
                    "value": "Minivan",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Luxury",
                    "count": 3,
                    "value": "Luxury",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Premium Electric",
                    "count": 1,
                    "value": "Premium Electric",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Standard SUV",
                    "count": 2,
                    "value": "Standard SUV",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Standard Elite SUV",
                    "count": 2,
                    "value": "Standard Elite SUV",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Premium SUV",
                    "count": 2,
                    "value": "Premium SUV",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Midsize SUV",
                    "count": 1,
                    "value": "Midsize SUV",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Full-Size SUV",
                    "count": 2,
                    "value": "Full Size SUV",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Standard Elite Coupe",
                    "count": 1,
                    "value": "Standard Elite Coupe",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Passenger Van",
                    "count": 2,
                    "value": "Passenger Van",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Standard Elite",
                    "count": 1,
                    "value": "Standard Elite",
                    "min": 0,
                    "max": 0
                }
            ]
        },
        {
            "name": "Passengers",
            "category": "SeatTypes",
            "type": "List",
            "options": [
                {
                    "label": "5",
                    "count": 28,
                    "value": "5",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "4",
                    "count": 6,
                    "value": "4",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "7",
                    "count": 8,
                    "value": "7",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "15",
                    "count": 1,
                    "value": "15",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "12",
                    "count": 1,
                    "value": "12",
                    "min": 0,
                    "max": 0
                }
            ]
        },
        {
            "name": "Transmission Type",
            "category": "TransmissionType",
            "type": "List",
            "options": [
                {
                    "label": "Automatic",
                    "count": 44,
                    "value": "automatic",
                    "min": 0,
                    "max": 0
                }
            ]
        },
        {
            "name": "Provider Name",
            "category": "ProviderName",
            "type": "List",
            "options": [
                {
                    "label": "Budget",
                    "count": 21,
                    "value": "budget",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Payless",
                    "count": 15,
                    "value": "payless",
                    "min": 0,
                    "max": 0
                },
                {
                    "label": "Avis",
                    "count": 8,
                    "value": "avis",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    ],
    "status": "Success"
}