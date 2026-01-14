// npm run start:proxy

// demo
// http://localhost:4201/nde/home?vid=EXLDEV1_INST:NDE_SPRINSHARE
// https://exldev-test1.primo.exlibrisgroup.com/nde/home?vid=EXLDEV1_INST:NDE_SPRINSHARE
// http://exldev-test1.primo.exlibrisgroup.com/nde/search?query=harry%20potter&tab=LibraryCatalog&search_scope=MyInstitution&searchInFulltext=false&facet=tlevel,include,available_p&offset=20&vid=EXLDEV1_INST:NDE_SPRINSHARE&lang=en
// http://localhost:4201/nde/search?query=harry%20potter&tab=LibraryCatalog&search_scope=MyInstitution&searchInFulltext=false&facet=tlevel,include,available_p&offset=0&vid=EXLDEV1_INST:NDE_SPRINSHARE&lang=en

const environments = {
    'demo': 'https://exldev-test1.primo.exlibrisgroup.com',
}

export const PROXY_TARGET = environments['demo'];
