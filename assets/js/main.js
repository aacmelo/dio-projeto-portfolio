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

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
         <li>
           <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
           <a href="${project.url}" target="_blank">${project.url}</a>
           </li>
        `
    }).join(``)
}

function updateProfesssionalExperience(profileData){
    const profissionalExperience = document.getElementById('profile.profissionalExperience')
    profissionalExperience.innerHTML = profileData.profissionalExperience.map(experience => {
        return `    
        <li>
           <h3 class="title">${experience.name}</h3>
           <p class="periodo">${experience.periodo}</p>
           <p>${experience.descricao}</p>
           </li>
        `
    }).join(``)
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfesssionalExperience(profileData)
})()
