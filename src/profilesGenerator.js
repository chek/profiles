export const ProfilesGenerator = {

    generateFirstName() {
        const firstNames = new Array ();
        firstNames[0] = "John";
        firstNames[1] = "Jake";
        firstNames[2] = "Ivan";
        firstNames[3] = "Peter";
        firstNames[4] = "Yao";
        firstNames[5] = "Shlomo";
        return firstNames[Math.floor(Math.random() * firstNames.length)];
    },

    generateLastName() {
        const lastNames = new Array ();
        lastNames[0] = "Smith";
        lastNames[1] = "Gavriel";
        lastNames[2] = "Lin";
        lastNames[3] = "Smirnov";
        lastNames[4] = "Harms";
        lastNames[5] = "Tuk";
        return lastNames[Math.floor(Math.random() * lastNames.length)];
    },

    generateProfils(count) {
        let i = 0;
        const profiles = new Array ();
        for (i = 0; i < count; i++) { 
            const profile = {
                firstName: this.generateFirstName(),
                lastName: this.generateLastName(),
            }
            profiles.push(profile)
        }
        return profiles
    },

    
}