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

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()
