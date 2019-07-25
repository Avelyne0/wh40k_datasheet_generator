// const BASE_URL = "https://datasheet-generator.herokuapp.com/";
const BASE_URL = "http://localhost:3000/";

const ABILITIES_URL = `${BASE_URL}abilities`;
const FACTION_KEYWORDS_URL = `${BASE_URL}faction_keywords`;
const KEYWORDS_URL = `${BASE_URL}keywords`;
const MODELS_URL = `${BASE_URL}models`;
const UNITS_URL = `${BASE_URL}units`;
const USERS_URL = `${BASE_URL}users`;
const WARGEAR_OPTIONS_URL = `${BASE_URL}wargear_options`
const WEAPONS_URL = `${BASE_URL}weapons`

const getAllModels = () => fetch(MODELS_URL).then(res => res.json())

export default {
    getAllModels
}