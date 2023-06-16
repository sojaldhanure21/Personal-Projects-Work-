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

export interface autoSuggest {
    locations: any,
    status: string
}