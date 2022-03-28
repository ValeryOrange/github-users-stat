export type queryVariablesType = {
    [key: string]: any,
};

export type UsersInfo = {
    name: string,
    url: string,
};

export type RepositoryInfo = {
    cursor?: string,
    node: {
        name: string,
        url: string,
        owner: {
            login: string,
        },
        collaborators: {
            totalCount: number,
            nodes: UsersInfo[] | null | undefined,
        },
    },
};

export type User = {
    name: string,
    url: string,
};

export type Repo = [
    {
        type: 'name',
        value: string,
    },
    {
        type: 'url',
        value: string,
    },
    {
        type: 'owner',
        value: string,
    },
    {
        type: 'totalUsers',
        value: number,
    },
    {
        type: 'users',
        value: User[] | null | undefined,
    },
    {
        type: 'errorMessage',
        value: string,
    },
];

export type ColumnSetting = {
    type: string,
    value: string,
};
