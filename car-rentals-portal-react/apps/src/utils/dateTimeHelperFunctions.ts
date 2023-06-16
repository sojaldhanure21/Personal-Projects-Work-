

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

export const staticTimeDropDown = [
    '00:00', 
    '00:30', 
    '01:00', 
    '01:30', 
    '02:00', 
    '02:30', 
    '03:00', 
    '03:30', 
    '04:00', 
    '04:30', 
    '05:00', 
    '05:30', 
    '06:00', 
    '06:30', 
    '07:00', 
    '07:30', 
    '08:00', 
    '08:30', 
    '09:00', 
    '09:30', 
    '10:00', 
    '10:30', 
    '11:00', 
    '11:30', 
    '12:00', 
    '12:30', 
    '13:00', 
    '13:30', 
    '14:00', 
    '14:30', 
    '15:00', 
    '15:30', 
    '16:00', 
    '16:30', 
    '17:00', 
    '17:30', 
    '18:00', 
    '18:30', 
    '19:00', 
    '19:30', 
    '20:00', 
    '20:30', 
    '21:00', 
    '21:30', 
    '22:00', 
    '22:30', 
    '23:00', 
    '23:30', 
]

export const staticAgeDropDown = [
    'Age 25+', 
    '24', 
    '23', 
    '22', 
    '21', 
    '20', 
    '19', 
    '18',
]

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

export const vehicles = [
    {
        "category": {
            "name": "Group B - Kia Soul or similar",
            "make": "Kia",
            "model": "Soul",
            "sipp_code": "CCAR",
            "vehicle_class_code": "B",
            "vehicle_class_name": "Compact ",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "aeaa87e0-c283-404e-951b-c5ca34eeb4e0",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 84,
            "totalRate": 127.03,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group C - Toyota Corolla or similar",
            "make": "Toyota",
            "model": "Corolla",
            "sipp_code": "ICAR",
            "vehicle_class_code": "C",
            "vehicle_class_name": "Intermediate",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "4",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "c305eacc-20ed-443f-a95e-324e9f886367",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 90.66,
            "totalRate": 135.84,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group F - Mazda CX-5 or similar",
            "make": "Mazda",
            "model": "CX-5",
            "sipp_code": "IFAR",
            "vehicle_class_code": "F",
            "vehicle_class_name": "Midsize SUV",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/etc/designs/payless/reservationlib/clientlib/images/image-unavailable.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "048c575d-5e81-4f2d-8c91-c5d811cda737",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 90.66,
            "totalRate": 135.84,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Hyundai Accent",
            "make": "hyundai",
            "model": "Accent",
            "sipp_code": "ECAR",
            "vehicle_class_code": "A",
            "vehicle_class_name": "Economy",
            "vehicle_transmission": "Automatic",
            "mpg": "28",
            "image_url": "https://www.budget.com/content/dam/cars/l/2016/hyundai/2016-hyundai-accent-se-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": false,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "28",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "5303a919-9027-4350-b31e-cd27a32f3530",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 94.73,
            "totalRate": 136.79,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Nissan Versa Hb",
            "make": "nissan",
            "model": "Versa Hb",
            "sipp_code": "CCAR",
            "vehicle_class_code": "B",
            "vehicle_class_name": "Compact",
            "vehicle_transmission": "Automatic",
            "mpg": "25",
            "image_url": "https://www.budget.com/content/dam/cars/l/2016/nissan/2016-nissan-versa-sv-cvt-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "25",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "c37c54a8-02b2-48e3-8fba-c4a7b6b845be",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 97.77,
            "totalRate": 140.76,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Hyundai Elantra",
            "make": "hyundai",
            "model": "Elantra ",
            "sipp_code": "ICAR",
            "vehicle_class_code": "C",
            "vehicle_class_name": "Intermediate",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2019/hyundai/2019-hyundai-elantra-ltd-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "736706e9-c98a-446d-a6ef-898c8bc53d6d",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 98.52,
            "totalRate": 141.74,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group A - Kia Rio or similar",
            "make": "Kia",
            "model": "Rio",
            "sipp_code": "ECAR",
            "vehicle_class_code": "A",
            "vehicle_class_name": "Economy",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/kia/2020-kia-rio-s-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "3d546c2f-a14f-4fc1-851b-2fe6bb035088",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 97.33,
            "totalRate": 144.69,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group D - Volkswagen Jetta or similar",
            "make": "Volkswagen",
            "model": "Jetta ",
            "sipp_code": "SCAR",
            "vehicle_class_code": "D",
            "vehicle_class_name": "Standard",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "2a0b68aa-6a98-484a-ba00-ae4bb4f6700f",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 102.66,
            "totalRate": 151.74,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Volkswagen Jetta",
            "make": "volkswagen",
            "model": "Jetta",
            "sipp_code": "SCAR",
            "vehicle_class_code": "D",
            "vehicle_class_name": "Standard",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "c2724565-9c5f-4596-b566-240f22496228",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 106.79,
            "totalRate": 152.51,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Toyota Camry",
            "make": "toyota",
            "model": "Camry",
            "sipp_code": "FCAR",
            "vehicle_class_code": "E",
            "vehicle_class_name": "Full Size",
            "vehicle_transmission": "Automatic",
            "mpg": "24",
            "image_url": "https://www.budget.com/content/dam/cars/l/2016/toyota/2016-toyota-camry-se-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "24",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "ebe55068-0b03-41fd-987b-d41087ad51a2",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 107.42,
            "totalRate": 153.34,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group E - Toyota Camry or similar",
            "make": "Toyota",
            "model": "Camry",
            "sipp_code": "FCAR",
            "vehicle_class_code": "E",
            "vehicle_class_name": "Full-Size  ",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "580caab6-1b48-47cb-bf49-84b498c0b745",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 104,
            "totalRate": 153.51,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group G - Volkswagen Passat or similar",
            "make": "Volkswagen",
            "model": "Passat",
            "sipp_code": "PCAR",
            "vehicle_class_code": "G",
            "vehicle_class_name": "Premium",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-passat-se-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "13b7fa42-86fa-43bf-9385-cbfd2d813290",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 109.33,
            "totalRate": 160.57,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group W - Ford Edge or similar",
            "make": "Ford",
            "model": "Edge",
            "sipp_code": "SFAR",
            "vehicle_class_code": "W",
            "vehicle_class_name": "Standard SUV",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/ford/2020-ford-edge-st-4wd-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "2aafdb81-7771-472e-8a65-e19b2ec8c7f9",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 112,
            "totalRate": 164.1,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group H - Chrysler 300 or similar",
            "make": "Chrysler",
            "model": "300",
            "sipp_code": "LCAR",
            "vehicle_class_code": "H",
            "vehicle_class_name": "Luxury",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2019/chrysler/2019-chrysler-300-limited-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "ad68bf45-2894-429e-8189-bb8473f42f77",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 113.33,
            "totalRate": 165.87,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Toyota Avalon",
            "make": "toyota",
            "model": "Avalon",
            "sipp_code": "PCAR",
            "vehicle_class_code": "G",
            "vehicle_class_name": "Premium",
            "vehicle_transmission": "Automatic",
            "mpg": "21",
            "image_url": "https://www.budget.com/content/dam/cars/l/2016/toyota/2016-toyota-avalon-xle-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "21",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "059583b7-bfc1-4bd0-b445-c61eb913f568",
            "currency": "USD",
            "rateCode": "AM",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 121.78,
            "totalRate": 172.06,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Toyota Rav4",
            "make": "toyota",
            "model": "Rav4",
            "sipp_code": "IFAR",
            "vehicle_class_code": "F",
            "vehicle_class_name": "Intermediate SUV",
            "vehicle_transmission": "Automatic",
            "mpg": "22",
            "image_url": "https://www.budget.com/content/dam/cars/l/2016/toyota/2016-toyota-rav4-xle-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "22",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "26b787d1-04a2-4811-8b86-7e1b8b15c0f3",
            "currency": "USD",
            "rateCode": "AM",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 123.34,
            "totalRate": 174.09,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Chevrolet Equinox",
            "make": "chevrolet",
            "model": "Equinox",
            "sipp_code": "SFAR",
            "vehicle_class_code": "W",
            "vehicle_class_name": "Standard SUV",
            "vehicle_transmission": "Automatic",
            "mpg": "27",
            "image_url": "https://www.budget.com/content/dam/cars/l/2018/chevrolet/2018-chevrolet-equinox-premier-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "27",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "453dd8a4-4b85-4aca-bb6a-8bdec357ff91",
            "currency": "USD",
            "rateCode": "AM",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 129.54,
            "totalRate": 182.18,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Ford Mustang Convertible",
            "make": "ford",
            "model": "Mustang Convertible",
            "sipp_code": "STAR",
            "vehicle_class_code": "K",
            "vehicle_class_name": "Convertible",
            "vehicle_transmission": "Automatic",
            "mpg": "19",
            "image_url": "https://www.budget.com/content/dam/cars/l/2020/ford/2020-ford-mustang-ecoboost-premium-convertible-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "2",
            "seats": "4",
            "mpg": "19",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "92740253-1b21-46e7-a78a-89af1f973540",
            "currency": "USD",
            "rateCode": "AM",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 136.39,
            "totalRate": 191.1,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Toyota Tacoma",
            "make": "toyota",
            "model": "Tacoma",
            "sipp_code": "LSAR",
            "vehicle_class_code": "XD",
            "vehicle_class_name": "Intermediate Pickup Truck",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2021/toyota/2021-toyota-tacoma-sr5-long-crew-cab-pick-up-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "3a843ee5-a3de-4b39-b097-e6ef13794254",
            "currency": "USD",
            "rateCode": "JW ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 137.51,
            "totalRate": 192.58,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Mystery Car Vehicle Determined at Checkout",
            "make": "mystery-car",
            "model": "Vehicle Determined at Checkout",
            "sipp_code": "DTAR",
            "vehicle_class_code": "XX",
            "vehicle_class_name": "Mystery Car",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/etc/designs/budget/reservationlib/clientlib/images/image-unavailable.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "2/4",
            "seats": "4",
            "luggage_capacity": {
                "large_suitcase": "0",
                "small_suitcase": "0"
            }
        },
        "rate": {
            "id": "49023c0d-eb03-42a2-93c2-bf9eca3eaf1d",
            "currency": "USD",
            "rateCode": "JW ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 137.51,
            "totalRate": 192.58,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Hyundai Genesis",
            "make": "hyundai",
            "model": "Genesis",
            "sipp_code": "LCAR",
            "vehicle_class_code": "H",
            "vehicle_class_name": "Luxury",
            "vehicle_transmission": "Automatic",
            "mpg": "18",
            "image_url": "https://www.budget.com/content/dam/cars/l/2016/hyundai/2016-hyundai-genesis-3.8-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "18",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "8fe699f8-e921-474d-9f0b-1e2c5e76e97b",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 142.68,
            "totalRate": 199.31,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group S - Nissan Pathfinder or similar",
            "make": "Nissan",
            "model": "Pathfinder",
            "sipp_code": "    ",
            "vehicle_class_code": "S",
            "vehicle_class_name": "Standard Elite SUV",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/nissan/2020-nissan-pathfinder-s-4wd-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "2eb7c1eb-7ba7-4e6f-9217-61aea500d39c",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 138.66,
            "totalRate": 199.4,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group Z - Chevrolet Tahoe or similar",
            "make": "Chevrolet",
            "model": "Tahoe",
            "sipp_code": "FFAR",
            "vehicle_class_code": "Z",
            "vehicle_class_name": "Full-Size SUV",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2021/chevrolet/2021-chevrolet-tahoe-lt-4wd-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "6d112f7c-b156-4fb8-a6d2-6bfd843b4fef",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 140,
            "totalRate": 201.18,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group K - Ford Mustang Convertible or similar",
            "make": "Ford",
            "model": "Mustang Convertible",
            "sipp_code": "STAR",
            "vehicle_class_code": "K",
            "vehicle_class_name": "Convertible",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/ford/2020-ford-mustang-ecoboost-premium-convertible-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "2",
            "seats": "4",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "a5300bb9-e3f0-43e8-9943-929fe0fa4246",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 144,
            "totalRate": 206.48,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Ford F150 Xlt Crewcab 4wd",
            "make": "ford",
            "model": "F150 Xlt Crewcab 4wd",
            "sipp_code": "FPAR",
            "vehicle_class_code": "XW",
            "vehicle_class_name": "Full Size Pickup",
            "vehicle_transmission": "Automatic",
            "mpg": "14",
            "image_url": "https://www.budget.com/content/dam/cars/l/2017/ford/2017-ford-f-150-xl-regular-cab-truck-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "14",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "3"
            }
        },
        "rate": {
            "id": "5624aef5-3ef6-48f8-b08a-c7b1f736fb57",
            "currency": "USD",
            "rateCode": "JW ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 156.26,
            "totalRate": 217.02,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Ford Fiesta or similar",
            "make": "Kia",
            "model": "Rio",
            "sipp_code": "MVAR",
            "vehicle_class_code": "A",
            "vehicle_class_name": "Economy",
            "vehicle_transmission": "Automatic",
            "mpg": "27/35",
            "image_url": "https://www.avis.com/content/dam/cars/l/2019/ford/2019-ford-fiesta-se-5door-2wd-hatchback-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "27/35",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "ed32a50f-c62f-420e-9ee6-f56bcb124a50",
            "currency": "USD",
            "rateCode": "2A",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 156.86,
            "totalRate": 219.55,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Group C - Toyota Corolla or similar",
            "make": "Toyota",
            "model": "Corolla",
            "sipp_code": "ICAR",
            "vehicle_class_code": "C",
            "vehicle_class_name": "Intermediate",
            "vehicle_transmission": "Automatic",
            "mpg": "29/35",
            "image_url": "https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "29/35",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "15a2ec42-e6ac-42dd-839c-12850142e02b",
            "currency": "USD",
            "rateCode": "2A",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 156.86,
            "totalRate": 219.55,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Ford Explorer 4WD",
            "make": "ford",
            "model": "Explorer 4WD",
            "sipp_code": "RFAR",
            "vehicle_class_code": "S",
            "vehicle_class_name": "Standard Elite SUV",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2021/ford/2021-ford-explorer-xlt-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "206801a1-b123-47f4-80c1-bdca08f0b845",
            "currency": "USD",
            "rateCode": "AM",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 167.04,
            "totalRate": 231.07,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Chevrolet Bolt EV",
            "make": "chevrolet",
            "model": "Bolt EV",
            "sipp_code": "JCAR",
            "vehicle_class_code": "XK",
            "vehicle_class_name": "Compact Crossover Electric",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2021/chevrolet/2021-chevrolet-bolt-ev-lt-5door-hatchback-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "c9304942-48d4-4089-99d3-acc09111c17e",
            "currency": "USD",
            "rateCode": "JW ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 168.76,
            "totalRate": 233.31,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group B - Kia Soul or similar",
            "make": "Kia",
            "model": "Soul",
            "sipp_code": "    ",
            "vehicle_class_code": "B",
            "vehicle_class_name": "Compact",
            "vehicle_transmission": "Automatic",
            "mpg": "25/29",
            "image_url": "https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "25/29",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "d428cb2f-0f5d-48cf-a45b-7bfc0d6b2ee2",
            "currency": "USD",
            "rateCode": "2A",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 168.20,
            "totalRate": 234.29,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Jeep Wrangler Altitude",
            "make": "jeep",
            "model": "Wrangler Altitude",
            "sipp_code": "WRAR",
            "vehicle_class_code": "XL",
            "vehicle_class_name": "Standard Recreational Vehicle",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2019/jeep/2019-jeep-wrangler-unlimited-sahara-4wd-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "24fb1006-39b6-44f8-8a33-66d76307c7eb",
            "currency": "USD",
            "rateCode": "JW ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 175.01,
            "totalRate": 241.47,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group D - Volkswagen Jetta or similar",
            "make": "Volkswagen",
            "model": "Jetta",
            "sipp_code": "SCAR",
            "vehicle_class_code": "D",
            "vehicle_class_name": "Standard",
            "vehicle_transmission": "Automatic",
            "mpg": "24/35",
            "image_url": "https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": false,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "24/35",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "008fa8ff-bce0-49cf-8d6f-e7948dc5b486",
            "currency": "USD",
            "rateCode": "2A",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 173.87,
            "totalRate": 241.66,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Group E - Toyota Camry or similar",
            "make": "Toyota",
            "model": "Camry",
            "sipp_code": "FCAR",
            "vehicle_class_code": "E",
            "vehicle_class_name": "Full-Size",
            "vehicle_transmission": "Automatic",
            "mpg": "22/30",
            "image_url": "https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": false,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "22/30",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "caf5cc5f-2897-43e4-b2fe-8e94c91301be",
            "currency": "USD",
            "rateCode": "2A",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 173.87,
            "totalRate": 241.66,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Kia Sedona",
            "make": "kia",
            "model": "Sedona",
            "sipp_code": "MVAR",
            "vehicle_class_code": "V",
            "vehicle_class_name": "Minivan",
            "vehicle_transmission": "Automatic",
            "mpg": "18",
            "image_url": "https://www.budget.com/content/dam/cars/l/2019/kia/2019-kia-sedona-ex-minivan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "mpg": "18",
            "luggage_capacity": {
                "large_suitcase": "3",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "00405727-4288-4c34-abb4-2df3d97514cf",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 187.84,
            "totalRate": 258.18,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group V - Chrysler Voyager or similar",
            "make": "Chrysler",
            "model": "Voyager",
            "sipp_code": "MVAR",
            "vehicle_class_code": "V",
            "vehicle_class_name": "Minivan",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/chrysler/2020-chrysler-voyager-lx-minivan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "ea00b9c0-c4f9-451b-adc2-6bba9fc6f2fe",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 185.33,
            "totalRate": 261.21,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Tesla Model Y",
            "make": "tesla",
            "model": "Model Y",
            "sipp_code": "RSAR",
            "vehicle_class_code": "XF",
            "vehicle_class_name": "Premium Electric",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2021/tesla/2021-tesla-model-y-long-range-4wd-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "491b1f9f-11f7-498c-8433-3519efe37014",
            "currency": "USD",
            "rateCode": "JW ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 193.76,
            "totalRate": 265.91,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group L - Ford Expedition or similar",
            "make": "Ford",
            "model": "Expedition",
            "sipp_code": "PFAR",
            "vehicle_class_code": "L",
            "vehicle_class_name": "Premium SUV",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/ford/2020-ford-expedition-xlt-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "luggage_capacity": {
                "large_suitcase": "3",
                "small_suitcase": "4"
            }
        },
        "rate": {
            "id": "990f2e8b-0bf3-4662-8623-dc9626a6a355",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 200,
            "totalRate": 280.63,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "Group H - Chrysler 300 or similar",
            "make": "Chrysler",
            "model": "300",
            "sipp_code": "LCAR",
            "vehicle_class_code": "H",
            "vehicle_class_name": "Luxury",
            "vehicle_transmission": "Automatic",
            "mpg": "18/21",
            "image_url": "https://www.avis.com/content/dam/cars/l/2019/chrysler/2019-chrysler-300-limited-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": false,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "5",
            "mpg": "18/21",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "86a137c8-eead-440c-9f95-8e52f5d87fb7",
            "currency": "USD",
            "rateCode": "2E",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 209.78,
            "totalRate": 288.35,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Chevrolet Suburban",
            "make": "chevrolet",
            "model": "Suburban",
            "sipp_code": "PFAR",
            "vehicle_class_code": "L",
            "vehicle_class_name": "Premium SUV",
            "vehicle_transmission": "Automatic",
            "mpg": "15",
            "image_url": "https://www.budget.com/content/dam/cars/l/2017/chevrolet/2017-chevrolet-suburban-1500-ls-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "mpg": "15",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "9f8d95df-ae7c-4eba-acf3-a4e9f054575a",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 227.87,
            "totalRate": 310.37,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group Z - Chevrolet Tahoe or similar",
            "make": "Chevrolet",
            "model": "Tahoe",
            "sipp_code": "FFAR",
            "vehicle_class_code": "Z",
            "vehicle_class_name": "Full-Size SUV",
            "vehicle_transmission": "Automatic",
            "mpg": "14/19",
            "image_url": "https://www.avis.com/content/dam/cars/l/2022/chevrolet/2022-chevrolet-tahoe-lt-4wd-suv-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "7",
            "mpg": "14/19",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "82371a17-ae28-49be-8142-0f302a9ca328",
            "currency": "USD",
            "rateCode": "2E",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 245.69,
            "totalRate": 335.04,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Ford Transit 15 Passenger Van",
            "make": "ford",
            "model": "Transit 15 Passenger Van",
            "sipp_code": "FVAR",
            "vehicle_class_code": "P",
            "vehicle_class_name": "Passenger Van",
            "vehicle_transmission": "Automatic",
            "mpg": "27",
            "image_url": "https://www.budget.com/content/dam/cars/l/2019/ford/2019-ford-transit-350-xlt-low-roof-60-40-pass-148wb-passenger-van-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "15",
            "mpg": "27",
            "luggage_capacity": {
                "large_suitcase": "5",
                "small_suitcase": "0"
            }
        },
        "rate": {
            "id": "fd43b7ac-56a9-4f80-a986-f419c566d1f5",
            "currency": "USD",
            "rateCode": "L1",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 282.53,
            "totalRate": 381.64,
            "providerName": "Budget"
        }
    },
    {
        "category": {
            "name": "Group XS - Dodge Challenger or similar",
            "make": "Dodge",
            "model": "Challenger",
            "sipp_code": "REAR",
            "vehicle_class_code": "XS",
            "vehicle_class_name": "Standard Sport",
            "vehicle_transmission": "Automatic",
            "mpg": "15/19",
            "image_url": "https://www.avis.com/content/dam/cars/l/2022/dodge/2022-dodge-challenger-rt-coupe-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": false,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "2",
            "seats": "4",
            "mpg": "15/19",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "1a77524a-4b64-42d3-871a-fd9f8155adac",
            "currency": "USD",
            "rateCode": "2C ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 328.85,
            "totalRate": 443.15,
            "providerName": "Avis"
        }
    },
    {
        "category": {
            "name": "Group P - Ford Transit 12-Passenger Van or similar",
            "make": "Ford",
            "model": "Transit 12-Passenger Van",
            "sipp_code": "FVAR",
            "vehicle_class_code": "P",
            "vehicle_class_name": "Passenger Van",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.paylesscar.com/content/dam/cars/l/2020/ford/2020-ford-transit-350-xlt-low-roof-passenger-van-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "12",
            "luggage_capacity": {
                "large_suitcase": "2",
                "small_suitcase": "2"
            }
        },
        "rate": {
            "id": "3bb51544-5749-4164-ad5e-15b3f8db1856",
            "currency": "USD",
            "rateCode": "1D",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 328,
            "totalRate": 450.11,
            "providerName": "Payless"
        }
    },
    {
        "category": {
            "name": "BMW X4 xDrive 30i",
            "make": "bmw",
            "model": "X4 xDrive 30i",
            "sipp_code": "GSAR",
            "vehicle_class_code": "XE",
            "vehicle_class_name": "Standard Elite",
            "vehicle_transmission": "Automatic",
            "image_url": "https://www.budget.com/content/dam/cars/l/2019/bmw/2019-bmw-3-series-m-sport-sedan-white.png"
        },
        "features": {
            "bluetooth_equipped": false,
            "smoke_free": true,
            "air_conditioned": true,
            "connected_car": false
        },
        "capacity": {
            "doors": "4",
            "seats": "4",
            "luggage_capacity": {
                "large_suitcase": "1",
                "small_suitcase": "1"
            }
        },
        "rate": {
            "id": "786f2ad9-c6db-4dd9-bf0d-4488904ffcec",
            "currency": "USD",
            "rateCode": "L1 ",
            "discounts": [],
            "underAgeFeeApplied": false,
            "taxes": [],
            "fees": [],
            "baseRate": 1249.99,
            "totalRate": 1642.96,
            "providerName": "Budget"
        }
    }
]