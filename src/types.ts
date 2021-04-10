export type SanrResponse<T> = {
  data: Array<T>,
  total: number;
};

export type Worldstate = {
  signalsSmartContractAddress: string,
  openForecasts: number,
  totalForecasts: number,
  totalIssuers: number
};

export type Competition = {
  id: string,
  status: string,
  startDate: string,
  endDate: string
};

export type Signal = {
  "id": string,
  "signalID": string,
  "issuerId": string,
  "issuerAddress": string,
  "symbol": string,
  "direction": string,
  "status": string,
  "inCompetition": boolean,
  "stopLossPrice": number,
  "takeProfitPrice": number,
  "signalOpenDate": string,
  "signalCloseDate": string,
  "signalOpenPrice": number,
  "signalClosePrice": number,
  "signalPerformance": number,
  "maxPrice": number,
  "minPrice": number,
  "username": string
};

export type Issuer = {
  id: string,
  address: string,
  username: string,
  performance: number,
  mo: number,
  stakedAmount: number,
  possibleNewForecasts: number,
  originalId: string,
  competitionId: string,
  avgProfitability: number,
  geometricAvgProfitability: number,
  signalsAmount: number,
  createdAt: string,
  signalsAmountClosed: number,
  performanceClosed: number
};
