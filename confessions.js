const crypto = require("crypto");
const logs = require("./graphql.json");

const ch = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\\'()*+,-./:;<=>?@[\\\\]^_\`{|}~ \\t\\n\\r`.split("");

const confessionRequests = logs.data.requestsLog.filter(request => request.name === "confession");
const confessionHashes = confessionRequests.map(request => JSON.parse(request.args).hash);

const decryptCharacter = (prefix, hash) => {
    for (const character of ch) {
        const currentHash = crypto
            .createHash("sha256")
            .update(prefix + character)
            .digest("hex");
        if (currentHash === hash)
            return character;
    }
    return null;
};

const decryptMessage = hashes => {
    let message = "";
    for (const hash of hashes) {
        const character = decryptCharacter(message, hash);
        message += character;
    }
    return message;
};

console.info(decryptMessage(confessionHashes));
