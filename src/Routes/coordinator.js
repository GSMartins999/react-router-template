
export const goToHomePage = (navigate) => {
  navigate("/")
}

export const goToProfilePage = (navigate, name) => {
  navigate(`/ProfilePage/${name}`)
}