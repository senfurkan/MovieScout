export interface Person {
    id:                   number;
    name:                 string;
    original_name:        string;
    media_type:           string;
    adult:                boolean;
    popularity:           number;
    gender:               number;
    known_for_department: string;
    profile_path:         string;
    known_for:            KnownFor[];
}

export interface KnownFor {
    backdrop_path:     string;
    id:                number;
    title:             string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    adult:             boolean;
    original_language: string;
    genre_ids:         number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
