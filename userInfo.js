function createUserProfiles(originalNames, modifiedNames) {
    return originalNames.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);