const  templateNav = () => {
    let htmlNav = `
        <li>
          <a href="#/"> Home </a>
        </li>
        <li>
          <a href="#/profile"> Perfil </a>
        </li>
        <li>
          <a href="#/favorites"> Favoritos </a>
        </li>
        <li>
          <a href="#/setting"> Configuración </a>
        </li>
        <li>
          <a href="#/logout"> Cerrar sesión </a>
        </li>
      `
    
      const labelNav = document.createElement('nav')
      labelNav.setAttribute('class', 'nav')
      labelNav.innerHTML = htmlNav

}