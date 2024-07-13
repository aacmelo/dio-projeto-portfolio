function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name


    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const cargo = document.getElementById('profile.cargo')
    cargo.innerText = profileData.cargo

    const endereco = document.getElementById('profile.endereco')
    endereco.innerText = profileData.endereco

    const telefone = document.getElementById('profile.telefone')
    telefone.innerText = profileData.telefone
    telefone.href = 'tel:${profileData.phone}'

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = 'mailto:${profileData.email}'

}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join(``)
}

function updateHardSkills(profileData){
     const hardSkills = document.getElementById('profile.skills.hardSkills')
     hardSkills.innerHTML = profileData.skills.hardSkills.map(hardSkills => `<li><img src="${hardSkills.logo}" alt="${hardSkills.name} title="${hardSkills.name}""></li>`).join(``)    
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join(``)
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
})()
