export * from './types';
export * from './typeguards';

export const jwtEndpoint = (careInstanceName: string, ownerId: string, appId: string): string => {
    return `https://${careInstanceName}.response.lithium.com/api/v2/tokens/khorosapi/${ownerId}/${appId}`
}

export const apiEndpoint = (region: 'US' | 'EMEA' | 'APAC') => {
    switch (region) {
        case 'US':
            return 'https://api.app.lithium.com'
        case 'EMEA':
            return 'https://api-eu.app.lithium.com'
        case 'APAC':
            return 'https://api-ap.app.lithium.com'
        default:
            ((a: never): never => {throw new Error(`unexpected: ${a}`)})(region)
    }
}