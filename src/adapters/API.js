// const endpoint = "https://datasheet-generator.herokuapp.com/";
const endpoint = "http://localhost:3000/";

const signupUrl = `${endpoint}users`
const loginUrl = `${endpoint}login`
const validateUrl = `${endpoint}validate`
const everythingUrl = `${endpoint}everything`

const jsonify = res => {
    // return res.json()
    if (res.ok)
        return res.json()
    else {
        const jsonData = res.json()
        return jsonData.then(data => {
            if (data.errors) {
                throw data.errors
            } else {
                return data
            }
        })
    }
}

const handleServerError = response => alert(response)

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(data => {
        localStorage.setItem('token', data.token)
        return data.user
    })
    .catch(handleServerError)


const logIn = (user) => fetch(loginUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user })
}).then(jsonify)
    .then(data => {
        localStorage.setItem('token', data.token)
        return data.user
    })
    .catch(handleServerError)

const validateUser = async () => {
    if (!localStorage.getItem('token')) return Promise.resolve({ error: 'no token' })
    try {
        const res = await fetch(validateUrl, {
            headers: constructHeaders()
        });
        const data = await jsonify(res);
        localStorage.setItem('token', data.token);
        return data.user;
    }
    catch (response) {
        return handleServerError(response);
    }
}

const clearToken = () => localStorage.removeItem('token')

const getEverything = () => fetch(everythingUrl).then(jsonify)

const postObject = (object, url) => fetch(`${endpoint}${url}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.token
    },
    body: JSON.stringify(object)
}).then(res => res.json())

export default {
    signUp,
    logIn,
    validateUser,
    clearToken,

    postObject,

    getEverything
}
