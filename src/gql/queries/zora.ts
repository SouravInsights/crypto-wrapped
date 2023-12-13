import { gql } from "@apollo/client";

export const FETCH_All_NFTS_BY_DATE = gql`
  query FetchAllNFTsByDate($address: [String!]) {
    mints(
      filter: { timeFilter: { startDate: "2023-01-01", endDate: "2023-12-13" } }
      networks: { network: ZORA, chain: ZORA_MAINNET }
      where: { recipientAddresses: $address }
      pagination: { limit: 5 }
    ) {
      nodes {
        token {
          name
          owner
          image {
            url
            mediaEncoding {
              ... on ImageEncodingTypes {
                original
                poster
                large
                thumbnail
              }
              ... on VideoEncodingTypes {
                poster
                large
                original
              }
              ... on AudioEncodingTypes {
                original
              }
            }
            mimeType
          }
          tokenId
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const GET_UFO_DATA_BY_ADDRESS = gql`
  query GetUFODataByAddress($address: [String!]) {
    mints(
      filter: { timeFilter: { startDate: "2023-01-01", endDate: "2023-12-13" } }
      networks: { network: ZORA, chain: ZORA_MAINNET }
      where: {
        collectionAddresses: "0x4174f78b7769650c1b205a2e1ac69cd0e47bbe02"
        recipientAddresses: $address
      }
      pagination: { limit: 5 }
    ) {
      nodes {
        token {
          name
          content {
            mediaEncoding {
              ... on AudioEncodingTypes {
                original
              }
            }
          }
          image {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
