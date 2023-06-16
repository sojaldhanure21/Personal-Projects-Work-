export const currencies: any = [
    { label: 'United States Doller', currancy: 'USD', symbol: '$' },
    { label: 'Indian Rupee', currancy: 'INR', symbol: '₹' },
    { label: 'U.A.E. DirhAM', currancy: 'AED', symbol: 'د.إ' },
    { label: 'Singaporean Doller', currancy: 'SGD', symbol: '$' },
    { label: 'Euro', currancy: 'EUR', symbol: '€' },
    { label: 'Philippine Peso', currancy: 'PHP', symbol: '₱' },
    { label: 'Pound Sterling', currancy: 'GBP', symbol: '£' },
    { label: 'Australian Dollar', currancy: 'AUD', symbol: '$' },
    { label: 'Saudi Arabian Riyal', currancy: 'SAR', symbol: '﷼'},
    { label: 'Qatari Riyal', currancy: 'QAR', symbol: 'ر.ق' },
    { label: 'Canadian Dollar', currancy: 'CAD', symbol: '$' },
    { label: 'Swiss Franc', currancy: 'CHF', symbol: 'Fr' },
    { label: 'Chinese Yuan', currancy: 'CNY', symbol: '¥' },
    { label: 'Hong Kong Dollar', currancy: 'HKD', symbol: '$' },
    { label: 'New Zealand Dollar', currancy: 'NZD', symbol: '$' },
    { label: 'Mexican Peso', currancy: 'MXN', symbol: '$' },
]

export function getMonth(month: any) {
    switch (month) {
        case 1:
            return 'JAN'
        case 2:
            return 'FEB'
        case 3:
            return 'MAR'
        case 4:
            return 'APR'
        case 5:
            return 'MAY'
        case 6:
            return 'JUN'
        case 7:
            return 'JUL'
        case 8:
            return 'AUG'
        case 9:
            return 'SEP'
        case 10:
            return 'OCT'
        case 11:
            return 'NOV'
        case 12:
            return 'DEC'

    }
}

export const locations = [
    {
        "id": "11232",
        "name": "Pune",
        "fullName": "Pune, Maharashtra, India",
        "type": "City",
        "state": "Maharashtra",
        "country": "IN",
        "score": 0,
        "coordinates": {
            "lat": 18.456215,
            "long": 73.840096
        }
    },
    {
        "id": "6764",
        "name": "Pune",
        "fullName": "Pune And Vicinity, India",
        "type": "MultiCity",
        "state": "Maharashtra",
        "country": "IN",
        "score": 0,
        "coordinates": {
            "lat": 18.520838,
            "long": 73.8554
        }
    },
    {
        "id": "705689",
        "name": "Pune (PNQ-Lohegaon)",
        "fullName": "Pune, India (PNQ-Lohegaon)",
        "code": "pnq",
        "type": "Airport",
        "country": "IN",
        "score": 0,
        "coordinates": {
            "lat": 18.579058,
            "long": 73.90966
        }
    },
    {
        "id": "90956",
        "name": "Buntu Pune",
        "fullName": "Buntu Pune, Indonesia",
        "type": "PointOfInterest",
        "state": "Tana Toraja",
        "country": "ID",
        "score": 0,
        "coordinates": {
            "lat": -3.0398,
            "long": 119.8584
        }
    },
    {
        "id": "56741",
        "name": "Hard Rock Cafe Pune",
        "fullName": "Hard Rock Cafe Pune, Pune, India",
        "type": "PointOfInterest",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "IN",
        "score": 0,
        "coordinates": {
            "lat": 18.538568,
            "long": 73.91285
        }
    },
    {
        "id": "106121",
        "name": "Pune Junction Railway Station",
        "fullName": "Pune Junction Railway Station, Pune, India",
        "type": "TrainStation",
        "city": "Central Pune",
        "state": "Maharashtra",
        "country": "IN",
        "score": 0,
        "coordinates": {
            "lat": 18.528652,
            "long": 73.87441
        }
    },
    {
        "id": "81695",
        "name": "Pune-Okayama Friendship Garden",
        "fullName": "Pune-Okayama Friendship Garden, Pune, India",
        "type": "PointOfInterest",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "IN",
        "score": 0,
        "coordinates": {
            "lat": 18.492476,
            "long": 73.836105
        }
    },
    {
        "id": "5560906",
        "name": "Hyatt Pune",
        "fullName": "Hyatt Pune, Pune, Maharashtra, IN",
        "type": "Hotel",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "IN",
        "score": 0,
        "referenceId": "15401717",
        "coordinates": {
            "lat": 18.554628,
            "long": 73.90454
        }
    },
    {
        "id": "6015479",
        "name": "The HHI Pune",
        "fullName": "The HHI Pune, PUNE, IN",
        "type": "Hotel",
        "city": "PUNE",
        "country": "IN",
        "score": 0,
        "referenceId": "39811512",
        "coordinates": {
            "lat": 18.561537,
            "long": 73.92029
        }
    },
    {
        "id": "5972036",
        "name": "Phoenix Pune",
        "fullName": "Phoenix Pune, PUNE, IN",
        "type": "Hotel",
        "city": "PUNE",
        "country": "IN",
        "score": 0,
        "referenceId": "39723874",
        "coordinates": {
            "lat": 18.537977,
            "long": 73.91087
        }
    }
]
