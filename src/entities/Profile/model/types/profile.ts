import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    // В дата храним то, что получиил с сервера
    data?: Profile;
    // В форм то, что наизменял пользователь
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
