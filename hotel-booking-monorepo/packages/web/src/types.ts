export interface Context {
    name: string,
    enableGuestFlow: boolean,
    enableEarnPointFlow: boolean,
    enableRedeemPointFlow: boolean,
    pointMultiplier: number,
    defaultCurrencyCode: string,
    sessionKey: string,
    channelId: string,
    accountId: string,
    user: any,
    apiKey: any
}

export interface InitHotelSearchBody {
    culture: string,
    currency: string,
    checkIn: string,
    checkOut: string,
    rooms: [
        {
            adults: number,
            children: number,
            childAges: any
        }
    ],
    countryOfResidence: string,
    nationality: string,
    locationId: string,
    fullName: string,
    channelId: string
}

export interface InitHotelSearch {
    searchId: string,
    searchTracingKey: string,
    status: string
}

export interface autoSuggest {
    locations: any,
    status: string
}

export interface getHotelResult {
    "searchStatus": string,
    "hotels": any,
    "currency": string,
    "total": number,
    "filterCount": number,
    "status": string
}

export interface getRoomData {
    "groups": any,
    "stayPeriod":any,
    "searchId": string,
    "searchTracingKey": any,
    "status": string
}