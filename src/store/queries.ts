export const viewer = `
    query { 
        viewer {
            login
        }
    }`;

export const searchRepos = `
query Search($query: String!){ 
    search(type: REPOSITORY, query: $query, first: 20) {
        repositoryCount
        edges {
            cursor
            node {
                ...on Repository {
                    name: nameWithOwner
                    url
                    owner {
                        login
                    }
                    collaborators(first: 20, affiliation: ALL) {
                        totalCount
                        nodes {
                            ...on User {
                                name
                                url: resourcePath
                            } 
                        }
                    }
                }
            }
        }
        pageInfo {
            hasNextPage
            endCursor
        }
    }
}`;
