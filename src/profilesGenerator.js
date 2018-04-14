import randomProfile from 'random-profile-generator'

export const ProfilesGenerator = {

    generateProfils(count) {
        let i = 0;
        const profiles = [];
        for (i = 0; i < count; i++) { 
            const profile = randomProfile.profile();
            profiles.push(profile)
        }
        return profiles
    },

    
}