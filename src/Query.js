import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query getRepository($username: String!) {
    user(login: $username) {
      login
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      name
      repositories(first: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          id
          name
          updatedAt
          url
          languages(last: 1, orderBy: { field: SIZE, direction: ASC }) {
            nodes {
              color
              name
              id
            }
          }
        }
      }
      pinnedItems(first: 3) {
        edges {
          node {
            ... on Repository {
              id
              name
              url
              languages(orderBy: { direction: ASC, field: SIZE }, last: 1) {
                edges {
                  node {
                    color
                    name
                  }
                }
              }
            }
          }
        }
        totalCount
      }
    }
  }
`;
