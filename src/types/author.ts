export type Author = {
    id: string,
    fullName: string
}

export type AuthorWithProperties = Author & {
    properties: Record<string, string>
}
