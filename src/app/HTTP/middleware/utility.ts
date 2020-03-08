export function ParseAuthorization(auth: string) {
    if (!auth) {
        return {};
    }
    // Trimming the auth scheme name (Basic, Digest...)
    let schemeNameLen = auth.indexOf(" ");
    auth = auth.substring(schemeNameLen);
    return Object.fromEntries(auth.split(',').map(v => {
        let pair = v.trim().split('=');
        // Trimming the possible quotes.
        pair[1] = pair[1].replace(/^"/, '').replace(/"$/, '');
        return pair;
    }));
}

export function GenerateNonsense(len: number) {
    let res = '';
    for (let i=0; i<len; i++) {
        res += Math.round(Math.random() * 16).toString(16);
    }
    return res;
}