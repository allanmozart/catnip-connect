import { HeaderContainer, Button } from "./style"

function Header() {
    return(
        <HeaderContainer>
            <Button to="/home">Home</Button>
            <Button to="/vote">Vote</Button>
            <Button to="/breeds">Breeds</Button>
            <Button to="/image-search">Image Search</Button>
            <Button to="/favourites">Favourites</Button>
            <Button to="/upload">Upload</Button>
        </HeaderContainer>
    )
}

export default Header