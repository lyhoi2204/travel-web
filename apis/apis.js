import { request } from "./base-api";
import { LIMIT } from "../configs/config";

//
export const getHomePage = async () => await request('GET', '/api/v1/tours', {});

export const getTourHomePage = async (offset) => await request('GET', `/api/v1/tours/featured?offset=${offset}&limit=${LIMIT}`, {});

export const getTourHomeByCountries = async (offset) => await request('GET', `/api/v1/tours/home-featured?offset=${offset}&limit=${LIMIT}`, {});

export const getTourBySlug = async (slug) => await request('GET', `/api/v1/tours/detail?slug=${slug}`, {});

export const getCountries = async () => await request('GET', '/api/v1/countries', {});

export const getTourRecommend = async (countryId) => await request('GET', `/api/v1/tours?countryId=${countryId}`, {});

export const getCountryDetail = async (id) => await request('GET', `/api/v1/countries/${id}`, {});

export const getCountryDetailBySlug = async (slug) => await request('GET', `/api/v1/countries/${slug}`, {});

export const getBlogs = async (offset) => await request('GET', `/api/v1/blogs?offset=${offset}&limit=${LIMIT}`, {});

export const getBlogDetailBySlug = async (slug) => await request('GET', `/api/v1/blogs/detail?slug=${slug}`, {});
