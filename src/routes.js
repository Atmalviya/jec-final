/**
 * An Array of routes that are accessible to the publi
 * These routes don't required authentication
 * @type {string[]}
 */
export const publicRoutes = [
    '/',
    '/auth/new-verification'
];


/**
 * An Array of routes that are used for the authentication
 * These routes will redirect logged in user to setting page
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/signin",
    "/auth/signup",
    '/auth/reset',
    '/auth/new-password'
]


/**
 * An Array of routes that are protected
 * These routes required authentication
 * @type {string[]}
 */
export const protectedRoutes = [
    "/settings",
    "/dashboard",
    "/profile"
]


/**
 * The prefix for API Authentication routes
 * Routes that start with this prefix are used for API Authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "api/auth"


/**
 * The default redirect route after logging in 
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT_URL = '/dashboard'