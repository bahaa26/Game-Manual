export interface Game {
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array <Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
    id: string;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}

interface ParentPlatform {
    platform: {
        name: string;
        slug: string;
    };
}

interface Publishers {
    name: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    name: string;
    image: string;
}

interface Trailer {
    data: {
        max: string;
    };
}

